import React from 'react';
import { Create, TextInput, TabbedForm, TabbedFormTabs } from 'react-admin';

export function UserEdit() {
    return (
        <Create>
            <TabbedForm
                tabs={
                    <TabbedFormTabs variant="scrollable" scrollButtons="auto" />
                }
                onSubmit={(e) => {
                    console.log(e)
                }}
            >
                <TabbedForm.Tab label="Tab 1">

                    <TextInput source="field1_1" label="Field 1.1" />
                    <TextInput source="field1_2" label="Field 1.2" />
                    <TextInput source="field1_3" label="Field 1.3" />
                    <TextInput source="field1_4" label="Field 1.4" />
                    <TextInput source="field1_5" label="Field 1.5" />

                </TabbedForm.Tab>
                <TabbedForm.Tab label="Tab 2">

                    <TextInput source="field2_1" label="Field 2.1" />
                    <TextInput source="field2_2" label="Field 2.2" />
                    <TextInput source="field2_3" label="Field 2.3" />
                    <TextInput source="field2_4" label="Field 2.4" />
                    <TextInput source="field2_5" label="Field 2.5" />

                </TabbedForm.Tab>
                <TabbedForm.Tab label="Tab 3">

                    <TextInput source="field3_1" label="Field 3.1" />
                    <TextInput source="field3_2" label="Field 3.2" />
                    <TextInput source="field3_3" label="Field 3.3" />
                    <TextInput source="field3_4" label="Field 3.4" />
                    <TextInput source="field3_5" label="Field 3.5" />

                </TabbedForm.Tab>
                <TabbedForm.Tab label="Tab 4">

                    <TextInput source="field4_1" label="Field 4.1" />
                    <TextInput source="field4_2" label="Field 4.2" />
                    <TextInput source="field4_3" label="Field 4.3" />
                    <TextInput source="field4_4" label="Field 4.4" />
                    <TextInput source="field4_5" label="Field 4.5" />

                </TabbedForm.Tab>
                <TabbedForm.Tab label="Tab 5">

                    <TextInput source="field5_1" label="Field 5.1" />
                    <TextInput source="field5_2" label="Field 5.2" />
                    <TextInput source="field5_3" label="Field 5.3" />
                    <TextInput source="field5_4" label="Field 5.4" />
                    <TextInput source="field5_5" label="Field 5.5" />

                </TabbedForm.Tab>
            </TabbedForm>
        </Create>
    )
} 