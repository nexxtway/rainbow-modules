/* eslint-disable no-unused-expressions */
import React from 'react';
import { mount } from '@cypress/react';
import { Input } from '@rainbow-modules/cypress/src/pageObjects';
import { UniversalForm, FieldsGenerator } from '@rainbow-modules/forms';

describe('<FieldsGenerator />', () => {
    it('should render the correct label on each field', () => {
        const schema = [
            {
                label: 'First Name',
                name: 'firstName',
                type: 'text',
                required: true,
                placeholder: 'Type your first name',
            },
            {
                label: 'Last Name',
                name: 'lastName',
                type: 'text',
                placeholder: 'Type your last name',
            },
        ];
        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} labelAlignment="left" />
            </UniversalForm>,
        );
        cy.get('label').first().should('have.text', '* First Name');
        cy.get('label').last().should('have.text', 'Last Name');
    });

    it('should validate min and max length', () => {
        const schema = [
            {
                label: 'Notes',
                name: 'notes',
                type: 'textarea',
                minLength: 5,
                maxLength: 10,
            },
        ];

        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} labelAlignment="left" />
                <button type="submit">Submit</button>
            </UniversalForm>,
        );
        cy.get('[name="notes"]').type('Rain');
        cy.get('button').click();
        const input = new Input('form div');
        input.expect('error', 'The input has less characters than 5');
        cy.get('[name="notes"]').type('bow Modules');
        cy.get('button').click();
        cy.get('[name="notes"]').should('have.value', 'Rainbow Mo');
    });

    it('should validate min and max value', () => {
        const schema = [
            {
                label: 'Amount',
                name: 'amount',
                type: 'number',
                min: {
                    value: 0,
                    errorMessage: "Value can't be less than 0",
                },
                max: 10,
            },
        ];

        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} labelAlignment="left" />
                <button type="submit">Submit</button>
            </UniversalForm>,
        );
        cy.get('[name="amount"]').type('-1');
        cy.get('button').click();
        const input = new Input('form div');
        input.expect('error', "Value can't be less than 0");
        cy.get('[name="amount"]').clear().type('11');
        cy.get('button').click();
        input.expect('error', 'The value is greater than 10');
    });

    it('should validate the fields with custom validator', () => {
        const schema = [
            {
                label: 'First Name',
                name: 'firstName',
                type: 'text',
                required: true,
                placeholder: 'Type your first name',
                isValid: true,
            },
        ];
        const isValidFn = cy.stub();
        const validations = {
            isValid: isValidFn,
        };

        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} validations={validations} labelAlignment="left" />
                <button type="submit">Submit</button>
            </UniversalForm>,
        );
        cy.get('button').click();
        cy.get('[id^="error-message"]').should('have.text', 'Required.');
        cy.get('input[type="text"]').type('Rainbow');
        cy.get('button')
            .click()
            .then(() => {
                expect(isValidFn).to.be.called;
            });
    });

    it('should render the custom types', () => {
        const schema = [
            {
                label: 'Count',
                name: 'count',
                type: 'number',
                required: true,
            },
        ];
        const types = {
            number: {
                component: () => <span id="test-component">Test</span>,
            },
        };

        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} types={types} labelAlignment="left" />
            </UniversalForm>,
        );
        cy.get('#test-component').should('exist');
    });

    it('should render nothing when schema is incorrect', () => {
        mount(
            <UniversalForm>
                <FieldsGenerator schema={undefined} />
            </UniversalForm>,
        );
        cy.get('form').should('be.empty');
    });

    it('should render an input with the correct type', () => {
        const fieldTypes = [
            'text',
            'password',
            'datetime',
            'datetime-local',
            'date',
            'month',
            'time',
            'week',
            'number',
            'email',
            'url',
            'search',
            'tel',
            'color',
        ];
        cy.wrap(fieldTypes).each((type) => {
            const schema = [
                {
                    label: type,
                    name: type,
                    type,
                },
            ];
            mount(
                <UniversalForm>
                    <FieldsGenerator schema={schema} />
                </UniversalForm>,
            );
            cy.get('input').should('have.attr', 'type', type);
        });
    });

    it('should render a textarea', () => {
        const schema = [
            {
                label: 'Textarea',
                name: 'textarea',
                type: 'textarea',
            },
        ];
        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} />
            </UniversalForm>,
        );
        cy.get('textarea').should('exist');
    });

    it('should render a select with the correct options', () => {
        const schema = [
            {
                label: 'Select',
                name: 'select',
                type: 'select',
                options: [
                    { value: 'female', label: 'Female' },
                    { value: 'male', label: 'Male' },
                ],
            },
        ];
        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} />
            </UniversalForm>,
        );
        cy.get('select').should('exist');
        cy.get('option').should('have.lengthOf', 2);
        cy.get('option').eq(0).should('have.value', 'female');
        cy.get('option').eq(1).should('have.value', 'male');
    });

    it('should render a CheckboxToggle', () => {
        const schema = [
            {
                label: 'Boolean',
                name: 'boolean',
                type: 'boolean',
            },
        ];
        mount(
            <UniversalForm>
                <FieldsGenerator schema={schema} />
            </UniversalForm>,
        );
        cy.get('input[type="checkbox"]').should('exist');
        cy.get('.rainbow-checkbox-toggle_faux-container').should('exist');
    });
});
