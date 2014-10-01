 Ext.define('DemoMVC.view.PesquisarView', {
    extend: 'Ext.form.Panel',
     //store:xxxx
     title: 'Formulário - Cadastro de Contatos',
     bodyPadding: 10,     
     width: 350,
     
     items: [{
        fieldLabel: 'First Name',
        name: 'first',
        allowBlank: false
    },{
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    }]
     
     
 });