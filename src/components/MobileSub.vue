<template>
    <div class="mobile-banner">
        <div id="sfd3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b" class="input-ground-join" data-type="signupform">
                        <div id="customForm">
                        <input type="hidden" id="signupFormType" value="QuickForm_Horizontal">
                        <div class="quickFormHorizontal quick_form_8_css" name="SIGNUP_BODY" id="SIGNUP_BODY">
                            <div id="SIGNUP_HEADING" name="SIGNUP_HEADING" changeid="SIGNUP_MSG" changetype="SIGNUP_HEADER"></div>
                            <div style="position:relative;">
                            <div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154);  margin-top: 10px;margin-bottom:10px;word-break:break-all">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    <tr>
                                    <td width="10%">
                                        <img class="successicon" src="https://zca.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle">
                                    </td>
                                    <td>
                                        <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word">&nbsp;&nbsp;Thank you for Signing Up</span>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                            <form method="POST" id="zcampaignOptinForm" style="margin:0px;" action="https://zca.maillist-manage.com/campaigns/weboptin.zc" target="_zcSignup">
                            <div style="display:none;height:0;" id="errorMsgDiv"></div>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                <tr>
                                    <td align="left" valign="top">
                                    <div>
                                        <span>
                                        <span>
                                            <input savetype="EMBED_FORM_EMAIL_LABEL" changetype="CONTACT_EMAIL" name="CONTACT_EMAIL" changeitem="SIGNUP_FORM_FIELD" type="text" id="CONTACT_EMAIL"  :placeholder="$t('joinUs.placeholder')" class="mail-input">
                                            <span style="display:none" id="dt_CONTACT_EMAIL">1,true,6,联系人邮箱,2</span>
                                        </span>
                                        </span>
                                        <span style="padding-left:0px; padding-right:0px;padding-bottom:10px;">
                                        <input name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" type="button" class="btn-mail text-center" :value="$t('joinUs.subscribe')">
                                        </span>
                                    </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table><!-- Do not edit the below Zoho Campaigns hidden tags -->
                            <input type="hidden" id="fieldBorder" value="rgb(235, 235, 235)">
                            <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="" onload="">
                            <input type="hidden" id="submitType" name="submitType" value="optinCustomView">
                            <input type="hidden" id="lD" name="lD" value="164c127f33ff3bdf">
                            <input type="hidden" name="emailReportId" id="emailReportId" value="">
                            <input type="hidden" id="formType" name="formType" value="QuickForm">
                            <input type="hidden" name="zx" id="cmpZuid" value="1286d1b46">
                            <input type="hidden" name="zcvers" value="3.0">
                            <input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
                            <input type="hidden" id="mode" name="mode" value="OptinCreateView">
                            <input type="hidden" id="zcld" name="zcld" value="164c127f33ff3bdf">
                            <input type="hidden" id="document_domain" value="campaigns.zoho.com">
                            <input type="hidden" id="zc_Url" value="zca.maillist-manage.com">
                            <input type="hidden" id="new_optin_response_in" value="2">
                            <input type="hidden" id="duplicate_optin_response_in" value="2">
                            <input type="hidden" id="zc_formIx" name="zc_formIx" value="d3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b"><!-- End of the campaigns hidden tags --></form>
                        </div>
                        <img src="https://zca.maillist-manage.com/images/spacer.gif" id="refImage" onload="referenceSetter(this)" style="display:none;">
                        </div>
                    </div>
                    <div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;"></div>
                    <div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 70% !important; height: 40%;top: 50% !important;position: fixed; left: 50% !important;transform: translate(-50%,-50%);background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px;  box-shadow: 0 1px 10px #424242;padding: 35px;color: #333;margin: 0 !important;">
                        <span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
                        <img src="https://zca.maillist-manage.com/images/videoclose.png">
                        </span>
                        <div id="zcOptinSuccessPanel"></div>
                    </div>
    </div>
</template>

<script>
export default {
    mounted(){
      setTimeout(function(){
        setupSF('sfd3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b','ZCFORMVIEW',false,'light');
      },2500);
    }
}
</script>

<style scoped>

</style>


