Ext.define('DemoMVC.view.Home', {
    extend: 'Ext.container.Container',
    alias: 'widget.home',
    layout: 'border',
    
    items:[
        {
            region:'north',
            height: 60,
            maxHeight: 200,
            html: 'Cabeçalho da aplicação',
            split: true,
            itemId:'cabecalho'
        },
        {
            region:'west',
            minWidth: 200,
            html: 'Incluir o menu',
            split: true,
            itemId:'quadroMenu',
            layout:{
                     type:'accordion',
                     animate: true,
                     activeOnTop: true
                   },
            items:[
                {
                    itemId:'menuConfiguracoes',
                    layout:'vbox',
                    title: 'Configurações',
                    defaults:{
                        xtype:'button',
                        width:'90%',
                        padding:'10px'
                    },
                    items:[
                        {text: 'Banco de Dados'},
                        {text: 'Sistema'},
                        {text: 'Emissão'},
                        {text: 'Resultados'},
                        {text: 'Parâmetros'},
                        {text: 'Permissões',
                            handler: function(){
                                alert('Permissões do usuário');
                            }
                        }
                    ]
                },
                {
                    itemId:'menuSeguranca',
                    layout:'vbox',
                    title: 'Segurança', 
                     defaults:{
                        xtype:'button',
                        width:'90%',
                        padding:'10px'
                    },
                    items:[
                        {text: 'Segurança'},
                        {text: 'Autorização'},
                        {text: 'Autenticação'},
                        {text: 'Grupos'},
                        {text: 'Token'},
                        {text: 'Usuários'}
                    ]
                },
                {
                    itemId:'menuSistema',
                    layout:'vbox',
                    title: 'Sistema', 
                     defaults:{
                        xtype:'button',
                        width:'90%',
                        padding:'10px'
                    },
                    items:[
                        {text: 'Cadastro'},
                        {text: 'Relatório'},
                        {text: 'Pesquisa', itemId: 'pesquisar'}
                    ]
                }
            ]
            
           /* buttons:[
                {text:'Salvar', handler: function(){alert('voce salvou')}},
                {text:'Excluir'}
            ]*/
            
        },
        {
            region:'center',
            html: 'Corpo da aplicação',
            split: true,
            itemId: 'corpoHome',
            id:'corpoHome'
        }
        
    ]
    
});