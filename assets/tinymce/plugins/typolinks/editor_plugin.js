/* Contao Open Source CMS, (c) 2005-2013 Leo Feyer, LGPL license */
(function(){tinymce.create("tinymce.plugins.TypolinksPlugin",{init:function(e,t){e.addCommand("mceTypolinks",function(){e.windowManager.open({file:t+"/typolinks.php",width:360+parseInt(e.getLang("typolinks.delta_width",0)),height:256+parseInt(e.getLang("typolinks.delta_height",0)),inline:1},{plugin_url:t})}),e.addButton("typolinks",{title:"typolinks.link_desc",cmd:"mceTypolinks",image:t+"/img/link.gif"}),e.addShortcut("ctrl+k","typolinks.desc","mceTypolinks"),e.onNodeChange.add(function(e,t,n,r){t.setDisabled("typolinks",r&&n.nodeName!="A"),t.setActive("typolinks",n.nodeName=="A")}),e.addCommand("mceTypobox",function(){e.windowManager.open({file:t+"/typobox.htm",width:360+parseInt(e.getLang("typobox.delta_width",0)),height:256+parseInt(e.getLang("typobox.delta_height",0)),inline:1},{plugin_url:t})}),e.addButton("typobox",{title:"typolinks.image_desc",cmd:"mceTypobox",image:t+"/img/image.gif"})},getInfo:function(){return{longname:"Contao plugin",author:"Leo Feyer",authorurl:"http://www.inetrobots.com",infourl:"https://contao.org",version:"3.4.6"}}}),tinymce.PluginManager.add("typolinks",tinymce.plugins.TypolinksPlugin)})();