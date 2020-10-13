export default class Mail {
  constructor(mailerProvider, key) {
    this.key = key;
    this.mailerProvider = mailerProvider;
    this.init();
  }

  init() {
    this.mailerProvider.setApiKey(this.key);
  }

  async send(name, email, message) {
    try {
      const messageFromContactForm = this.messageFromContactForm(name, message);
      const replyMessageToUser = this.replyMessageToUser(name, email);
      await (this.mailerProvider.send(messageFromContactForm))
      await (this.mailerProvider.send(replyMessageToUser))
    } catch (e) {
      console.log(e)
    }
    
  }

  // change to private when # hash prefix  its support 
  replyMessageToUser(name, email) {
    return {
      to: `${email}`,
      from: 'contact@jozaguts.dev',
      reply: 'contact@jozaguts.dev',
      subject: 'Hello, Jozaguts.dev say Thanks',
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:verdana, geneva, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>Thanks\\'t</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--> 
  <!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> 
  <!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-width:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:verdana, geneva, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F6F6F6"> 
   <!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" src="https://hmrfet.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png" color="#f6f6f6" origin="0.5, 0" position="0.5,0"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://hmrfet.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-image:url(https://hmrfet.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png);background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td class="es-adaptive" align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td style="padding:10px;Margin:0;background-image:url(https://hmrfet.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png);background-position:left top;background-repeat:repeat" align="left" background="https://hmrfet.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png"> 
               <!--[if mso]><table style="width:580px"><tr><td style="width:280px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:280px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
<!--                     <tr style="border-collapse:collapse"> -->
<!--                      <td class="es-infoblock" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:verdana, geneva, sans-serif;line-height:14px;color:#CCCCCC">The message was received </p></td> -->
<!--                     </tr> -->
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:280px" valign="top"><![endif]--> 
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:280px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
<!--                     <tr style="border-collapse:collapse"> -->
<!--                      <td align="right" class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:verdana, geneva, sans-serif;line-height:14px;color:#CCCCCC"><a href="https://viewstripo.email/" target="_blank" class="view" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC">View online</a></p></td> -->
<!--                     </tr> -->
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td class="es-adaptive" align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:15px;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:570px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-p0l" align="center" style="padding:0;Margin:0;font-size:0px"><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:14px;text-decoration:underline;color:#1376C8"><img src="https://hmrfet.stripocdn.email/content/guids/CABINET_98370833296e1e91c053225d17619f54/images/94631602295235381.png" alt="LawServices logo" title="LawServices logo" width="183" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0"> 
                       <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr class="links" style="border-collapse:collapse"> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:12px;padding-bottom:12px;border:0" width="33.33%" bgcolor="#333333" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:none;display:block;color:#FFFFFF" href="https://jozaguts.dev">Home</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:12px;padding-bottom:12px;border:0" width="33.33%" bgcolor="#333333" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:none;display:block;color:#FFFFFF" href="https://jozaguts.dev/#about">About</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:12px;padding-bottom:12px;border:0" width="33.33%" bgcolor="#1f5b8b" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:none;display:block;color:#FFFFFF" href="https://jozaguts.dev/#aresume">Resume</a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;background-color:#F3F3F3" bgcolor="#f3f3f3" align="left"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <!--[if !mso]><!-- --> 
                     <tr class="es-desk-hidden" style="display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all;border-collapse:collapse"> 
                      <td align="center" style="Margin:0;padding-bottom:15px;padding-left:15px;padding-right:15px;padding-top:30px"><h1 style="Margin:0;line-height:46px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:38px;font-style:normal;font-weight:normal;color:#24578E">Gracias por comunicarte</h1></td> 
                     </tr> 
                     <!--<![endif]--> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:15px;font-size:0px"><img class="adapt-img" src="https://hmrfet.stripocdn.email/content/guids/CABINET_98370833296e1e91c053225d17619f54/images/73831602295874494.png" alt="Handshake" title="Handshake" width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:30px;padding-right:30px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:540px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:15px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:20px;font-style:normal;font-weight:normal;color:#24578E">Dear ${name}</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:verdana, geneva, sans-serif;line-height:21px;color:#333333">Thank you for communicating, your questions and opinion are very important to me and I will respond as soon as possible..</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:30px;padding-left:30px;padding-right:30px"> 
               <!--[if mso]><table style="width:540px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:100px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:100px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:13px;font-family:verdana, geneva, sans-serif;line-height:20px;color:#666666">Best Regards, Sagit Gutierrez Web Developer</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:420px" valign="top"><![endif]--> 
               <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:420px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;font-size:0px"><img src="https://hmrfet.stripocdn.email/content/guids/CABINET_98370833296e1e91c053225d17619f54/images/32751602296273120.png" alt="Photo" title="Photo" width="70" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/JozagutsDev/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Facebook" src="https://hmrfet.stripocdn.email/content/assets/img/social-icons/logo-gray/facebook-logo-gray.png" alt="Fb" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://twitter.com/jozaguts" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Twitter" src="https://hmrfet.stripocdn.email/content/assets/img/social-icons/logo-gray/twitter-logo-gray.png" alt="Tw" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://www.instagram.com/jozagutsdev/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Instagram" src="https://hmrfet.stripocdn.email/content/assets/img/social-icons/logo-gray/instagram-logo-gray.png" alt="Inst" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:verdana, geneva, sans-serif;line-height:21px;color:#FFFFFF"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF;line-height:21px" href="tel:3222397179">3222397179</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:verdana, geneva, sans-serif;line-height:21px;color:#FFFFFF"><a target="_blank" href="mailto:your@mail.com?subject=Contact" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF">contact@jozaguts.dev</a><br></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:verdana, geneva, sans-serif;line-height:18px;color:#FFFFFF">Jozagust © All Rights Reserved</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:verdana, geneva, sans-serif;line-height:24px;color:#FFFFFF">Clean Code Rules<br>"Leaving the camp cleaner than it has been found"<br>Vector graphics designed by <strong><a target="_blank" href="http://www.freepik.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF">Freepik</a></strong>.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-infoblock made_with" align="center" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=legal&utm_content=trigger_newsletter2" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:verdana, geneva, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC"><img src="https://hmrfet.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>

        `
    };
  }

  messageFromContactForm(name, message) {
    return {
      to: 'jozaguts@gmail.com',
      from: 'contact@jozaguts.dev',
      reply: 'contact@jozaguts.dev',
      subject: 'Message from Contact Form',
      html: `<h1>${name} <span> says:</span></h1> <br> <p>${message}</p>`,
    };
  }

}
