import { Section } from './types';

export function getChildAccordionSectionNodes(ref: HTMLElement): Array<Element> {
    return Array.from(ref.querySelectorAll('[data-id="stacked-accordion-section"]'));
}

function getRefIndex(nodes: Array<HTMLElement>, ref: HTMLElement) {
    return nodes.indexOf(ref);
}

function sortChildren(childrenRefs: Array<Section>, nodes: Array<Element>): Array<Section> {
    const [...newChildrenRefs] = childrenRefs;
    newChildrenRefs.sort(
        (refA, refB) => getRefIndex(nodes, refA.ref.current) - getRefIndex(nodes, refB.ref.current),
    );
    return newChildrenRefs;
}

export function insertSectionOrderly(
    sections: Array<Section>,
    section: Section,
    nodes: Array<Element>,
): Array<Section> {
    const newSections = sections.concat([section]);
    return sortChildren(newSections, nodes);
}
