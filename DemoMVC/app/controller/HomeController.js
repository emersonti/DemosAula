 Ext.define('DemoMVC.controller.HomeController', {
     extend: 'Ext.app.Controller',
     
     requires:[
         'DemoMVC.view.PesquisarView'
     ],
     
     init: function() {
         this.control({
             'home': {
                 render: this.evento
             },
             
             
             'home container': {
                 render: this.outroEvento
             },
             
             
             'home container container': {
                 render: this.outroEventoContainer
             },
             
             'home button': {
                 click: this.onClick
             },
             
             'home button#pesquisar': {
                 click: this.onPesquisarClick
             }
             
         });
     },

     evento: function(sender, eOpts) {
         //console.log('The panel was rendered');
     },
     
     outroEvento: function(sender, eOpts) {
         //console.log('Novo evento ' + sender.itemId);
         //console.log(sender);
     },
     
     outroEventoContainer: function(sender, eOpts) {
         //console.log('Outro container ' + sender.itemId);
         //console.log(sender);
     },
     
     onClick: function(sender, e, eOpts) {
        //console.log('Click geral ' + sender.itemId);
         //console.log(sender);
     },
     
     onPesquisarClick: function(sender, e, eOpts) {
         debugger;
         alert('a');
        Ext.create('DemoMVC.view.PesquisarView',{
            renderTo: Ext.getCmp('corpoHome')
        }).show();
     }
     
     
     
 });