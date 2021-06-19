import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Application } from 'react-rainbow-components';
import StackedAccordionSection from '..';
import { Provider } from '../../StackedAccordion/context';
import { StyledResizeBar } from '../styled';

jest.mock('../../../helpers/shouldMove', () => ({
    __esModule: true,
    default: () => true,
}));

const contextValue = {
    activeSectionNames: [],
    sections: [],
    onClick: jest.fn(),
    registerSection: jest.fn(),
    unregisterSection: jest.fn(),
    setIsResizing: jest.fn(),
};
jest.useFakeTimers();

describe('<StackedAccordionSection />', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should register the section', () => {
        mount(
            <Application>
                <Provider value={contextValue}>
                    <StackedAccordionSection name="test-section" />
                </Provider>
            </Application>,
        );
        jest.runAllTimers();
        expect(contextValue.registerSection).toHaveBeenCalledWith({
            name: 'test-section',
            ref: expect.anything(),
        });
    });

    it('should unregister the section', () => {
        const component = mount(
            <Application>
                <Provider value={contextValue}>
                    <StackedAccordionSection name="test-section" />
                </Provider>
            </Application>,
        );
        jest.runAllTimers();
        component.unmount();
        expect(contextValue.unregisterSection).toHaveBeenCalledWith('test-section');
    });

    it('should call onClick', () => {
        const component = mount(
            <Application>
                <Provider value={contextValue}>
                    <StackedAccordionSection name="test-section" />
                </Provider>
            </Application>,
        );
        jest.runAllTimers();
        component.find('button').simulate('click');
        expect(contextValue.onClick).toHaveBeenCalledWith('test-section');
    });

    it('should render the resize handler', () => {
        const context = {
            ...contextValue,
            activeSectionNames: ['test-section-1', 'test-section-2'],
            sections: [
                {
                    name: 'test-section-1',
                },
                {
                    name: 'test-section-2',
                },
            ],
        };
        const component = mount(
            <Application>
                <Provider value={context}>
                    <StackedAccordionSection name="test-section-1" />
                    <StackedAccordionSection name="test-section-2" />
                </Provider>
            </Application>,
        );
        const section = component.find(StackedAccordionSection).at(1);
        expect(section.find(StyledResizeBar).exists()).toBe(true);
    });

    it('should render the label passed', () => {
        const label = <p data-test="true">Label</p>;
        const component = mount(
            <Application>
                <Provider value={contextValue}>
                    <StackedAccordionSection name="test-section-1" label={label} />
                </Provider>
            </Application>,
        );
        const section = component.find(StackedAccordionSection);
        expect(section.find('[data-test="true"]').exists()).toBe(true);
    });

    it('should render the children passed when expanded', () => {
        const context = {
            ...contextValue,
            activeSectionNames: ['test-section-1'],
        };
        const children = <p data-test="true">Children</p>;
        const component = mount(
            <Application>
                <Provider value={context}>
                    <StackedAccordionSection name="test-section-1">
                        {children}
                    </StackedAccordionSection>
                </Provider>
            </Application>,
        );
        const section = component.find(StackedAccordionSection);
        expect(section.find('[data-test="true"]').exists()).toBe(true);
    });

    it('should not render the children passed when not expanded', () => {
        const children = <p data-test="true">Children</p>;
        const component = mount(
            <Application>
                <Provider value={contextValue}>
                    <StackedAccordionSection name="test-section-1">
                        {children}
                    </StackedAccordionSection>
                </Provider>
            </Application>,
        );
        const section = component.find(StackedAccordionSection);
        expect(section.find('[data-test="true"]').exists()).toBe(false);
    });

    it('should set isResizing to true when resize starts', () => {
        const context = {
            ...contextValue,
            activeSectionNames: ['test-section-1', 'test-section-2'],
            sections: [
                {
                    name: 'test-section-1',
                },
                {
                    name: 'test-section-2',
                },
            ],
        };

        const component = mount(
            <Application>
                <Provider value={context}>
                    <StackedAccordionSection name="test-section-1" />
                    <StackedAccordionSection name="test-section-2" />
                </Provider>
            </Application>,
        );
        jest.runAllTimers();
        const resizeHandler = component.find(StackedAccordionSection).at(1).find(StyledResizeBar);
        resizeHandler.simulate('mousedown');
        jest.runAllTimers();
        expect(context.setIsResizing).toHaveBeenCalledWith(true);
    });

    it('should set isResizing to false when resize ends', () => {
        const map = {};
        window.addEventListener = jest.fn().mockImplementation((event, cb) => {
            map[event] = cb;
        });

        const context = {
            ...contextValue,
            activeSectionNames: ['test-section-1', 'test-section-2'],
            sections: [
                {
                    name: 'test-section-1',
                },
                {
                    name: 'test-section-2',
                },
            ],
        };

        const component = mount(
            <Application>
                <Provider value={context}>
                    <StackedAccordionSection name="test-section-1" />
                    <StackedAccordionSection name="test-section-2" />
                </Provider>
            </Application>,
        );
        jest.runAllTimers();
        const resizeHandler = component.find(StackedAccordionSection).at(1).find(StyledResizeBar);
        resizeHandler.simulate('mousedown');
        jest.runAllTimers();
        act(() => {
            map.mouseup();
        });
        expect(context.setIsResizing).toHaveBeenCalledWith(false);
    });

    it('should change flex-basis on resize', () => {
        const map = {};
        window.addEventListener = jest.fn().mockImplementation((event, cb) => {
            map[event] = cb;
        });
        window.getComputedStyle = jest.fn(() => ({
            flexBasis: '100px',
        }));

        const context = {
            ...contextValue,
            activeSectionNames: ['test-section-1', 'test-section-2'],
            sections: [
                {
                    name: 'test-section-1',
                    ref: {
                        current: {
                            style: {},
                            getBoundingClientRect: () => ({
                                height: 150,
                            }),
                        },
                    },
                },
                {
                    name: 'test-section-2',
                    ref: {
                        current: {
                            style: {},
                            getBoundingClientRect: () => ({
                                height: 150,
                            }),
                        },
                    },
                },
            ],
        };

        const component = mount(
            <Application>
                <Provider value={context}>
                    <StackedAccordionSection name="test-section-1" />
                    <StackedAccordionSection name="test-section-2" />
                </Provider>
            </Application>,
        );
        jest.runAllTimers();
        const resizeHandler = component.find(StackedAccordionSection).at(1).find(StyledResizeBar);
        resizeHandler.simulate('mousedown', {
            clientY: 98,
        });
        jest.runAllTimers();
        act(() => {
            map.mousemove({
                clientX: 50,
                clientY: 100,
            });
        });
        expect(context.sections[0].ref.current.style.flexBasis).toBe('102px');
        expect(context.sections[1].ref.current.style.flexBasis).toBe('98px');
        act(() => {
            map.mousemove({
                clientX: 50,
                clientY: 98,
            });
        });
        expect(context.sections[0].ref.current.style.flexBasis).toBe('98px');
        expect(context.sections[1].ref.current.style.flexBasis).toBe('102px');
        act(() => {
            map.mouseup();
        });
    });
});
