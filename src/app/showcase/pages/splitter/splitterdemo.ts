import { Component } from '@angular/core';
import { SizeDoc } from '../../doc/splitter/sizedoc';
import { HorizontalDoc } from '../../doc/splitter/horizontaldoc';
import { ImportDoc } from '../../doc/splitter/importdoc';
import { VerticalDoc } from '../../doc/splitter/verticaldoc';
import { NestedDoc } from '../../doc/splitter/nesteddoc';
import { StyleDoc } from '../../doc/splitter/styledoc';
import { PropsDoc } from '../../doc/splitter/propsdoc';
import { EventsDoc } from '../../doc/splitter/eventsdoc';
import { TemplatesDoc } from '../../doc/splitter/templatesdoc';
import { AccessibilityDoc } from '../../doc/splitter/accessibilitydoc';

@Component({
    templateUrl: './splitterdemo.html'
})
export class SplitterDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'nested',
            label: 'Nested',
            component: NestedDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDoc
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDoc
        },
        {
            id: 'templates',
            label: 'Templates',
            component: TemplatesDoc
        }
    ];
}
