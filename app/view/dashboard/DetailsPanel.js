/**
 * Panel headers can be docked to any side of the panel.  This example demonstrates how
 * to dynamically change the position of a panel header by binding the headerPosition
 * config to the value of a segmented button.
 */
Ext.define('Ticket.view.dashboard.DetailsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.app-DetailsPanel',
    xtype: 'panel-header-position',
    bodyCls: 'app-DetailsPanel',
    width: 600,
    layout: 'column',
    viewModel: true,

    bodyStyle: "background: transparent",

    defaults: {
        bodyPadding: 10,
        height: 300,
        scrollable: true
    },

//     tbar: [
//         {
//        width: 100, 
//         xtype: 'label',
//         // text: 'Position:'
//     }, 
//     {
//         xtype: 'segmentedbutton',
//         // xtype: 'combobox',
//         reference: 'positionBtn',
//         value: 'top',
//         defaultUI: 'default',
//         // hidden: true,
//         items: [

//             {
//             text: 'Top',
//             value: 'top'
//         }, 

//         {
//             text: 'Right',
//             value: 'right'
//         }, {
//             text: 'Bottom',
//             value: 'bottom'
//         }, {
//             text: 'Hide',
//             value: 'hidden'
//         }]
//     }
// ],

    items: [
      
        {
            xtype: 'panel',
            columnWidth: 1,
            // margin: "0 0 0 0",
            // flex:1,
            title: 'Details Pane:',
            cls: Ext.baseCSSPrefix + 'shadow',
            // html: "just test--> As more information surfaces about the building code and fire safety violations in the Bailey Road mall where a fire claimed at least 46 lives on February 29, the government cannot remain in denial that the burden of recurring fire tragedies in our cities rests mostly on its agencies tasked with monitoring and enforcing compliance. While Rajuk, fire service, and city corporations are once again attempting to shift responsibility onto each other, a familiar pattern emerges—systematic negligence and lack of coordination among these vital departments. Consequently, a seven-storey building like the one on Bailey Road did not obtain an NOC from the fire service during construction, nor was it forced to implement fire safety measures despite being identified as a fire hazard. Similarly, every major fire incident in Dhaka over the past few years—Siddique Bazar, New Market, Bangabazar, Krishi Market—had a common theme of well-marked risky buildings meeting their inevitable doom. The fire service claims it sends copies of fire safety violation letters to the city corporations and Rajuk. However, no action follows. Fire officials say buildings like the Bailey Road's shouldn't house restaurants without safety measures, yet they get licenses. City corporations claim they cannot demolish high-risk structures due to court orders in favour of owners, while Rajuk faces allegations of ignoring widespread violations and enabling illegal operations.",
            bind: {
                headerPosition: '{positionBtn.value}'
            },
            tools: [
                // {
                //     // width: 100, 
                //      xtype: 'label',
                //      // text: 'Position:'
                //  },
                {
                    margin: "0 900 0 0",
                    xtype: 'segmentedbutton',
                    // xtype: 'combobox',
                    reference: 'positionBtn',
                    value: 'top',
                    defaultUI: 'default',
                    // hidden: true,
                    items: [
            
                    {
                        text: 'Top',
                        value: 'top'
                    }, 

                    {
                        text: 'Bottom',
                        value: 'bottom'
                    }, 
                    // {
                    //     text: 'Right',
                    //     value: 'right'
                    // },
                     {
                        text: 'Hide',
                        value: 'hidden'
                    },
                ]
                
               
            }
        
        ]
        },
        
        
        
 
    

        {
            title: 'Details', // Add another panel
            columnWidth: 1,
            margin: '5 0 0 0',
            collapsed: true,
            collapsible: true,
            html: 'Content of the Details panel'
        }


    ],


});