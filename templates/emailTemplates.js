 const getCandidateEmailTemplate = (name,company,position,date,time,roomID)=>{
    return  `<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:0;max-width:600px" width="100%">
    <tbody>
        <tr>
            <td align="center" bgcolor="#f8f9fa" id="m_5486121498000694681templatePreheader" style="text-align:center;background:#f8f9fa;border-bottom-color:#01305b;border-bottom-style:solid;border-bottom-width:10px;border-top-width:0" valign="top">
            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
                <tbody>
                    <tr>
                        <td valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                            <tbody>
                                <tr>
                                    <td style="text-align:center" valign="top">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" style="text-align:center;color:#ffffff;font-family:Helvetica;font-size:11px;line-height:125%;padding:9px 18px;text-align:center" valign="top"><img align="center" alt="" height="40" src="https://i.ibb.co/w7Km1HY/Screenshot-from-2024-02-16-21-58-56.png" style="border:0;height:auto!important;margin:0px;margin-bottom:10px;outline:none;text-decoration:none;width:180px" width="180" class="CToWUd" data-bit="iit"> <img src="https://ci3.googleusercontent.com/meips/ADKq_NZDQalQvV-PsbgGm-H5Tnjntd2PUXBOkiS5hG1difYX2owGobDUfDJrw_WmNfGu66b0BlQVIcFU6BAZd5xQRPVug0UhL_XvJ_Ozg6VoqUYDq5-VdXHlYWUyN_k5v9-leOajjRM8fnBeQxgXjRsS-hlSxsF6bMgUPWpX2yeCM30MY_Cew13muiCDkpxBY9tyIbfT3fMCtWRB1iaxoF4LkefdCWzwAUcb3gKRWnTNtIj_wYud7qgHWRZViN6bbot5RG-KS-AUusDiuvfLqXWr291aACFa6s3cEBAyHXI3hC7vFUNbukeLxcYn434E1mKT9IZD8AweSLUprx5IojhgY9d08kq_mkW5qkwau4-UxTYCIj2pgPNeiLPOd8pqFqx3s-gz5238sDQMOWSREH7kwwU6o5DZ2HXjW6Nwlesru-Pj5_gMfv0Qj-b-YM-mifeBApQy5qcDXq7xP__XEwzacKwhFGxs10qAxMNp70XcjM4uUDfWeaKWzcbWi9_WWnAnx-N4oyKF4nf8faa0UXEiPwTV5zvMgr_75lGjR77QS0OZF32_kIZqh9nu52vQaPAM9A=s0-d-e1-ft#https://www.hackerrank.com/signature.png?d=L3VxeEIxUjV2bFRVWnBmSW05RUtncUpXNEpQYzVENW1ZcW1sVEFqaHNrWGJtTWkyVGJOODZOMkhzOWpFeXpoTlFFeFdQMVFnUUhtNEd2ZTJnYjRPVFg1QnROcGxWSEtremNnK1ZzMUE0dmxsckR1Mi80VVFXUEVRY3FlMlZPRWhXNDhHdWJoMlN0U081eDd1UTBmeGpQWGpTNDdWRXpkYzZReEQycGY5S1FWUCtBQjdSMXE3NmJvb3MyQU4yYTczWU03RWEvbEZKSHAyVlQwSjVzOERsZz09LS1zVjRyL2NJY3lWVGdlTzlsSk9sQUNRPT0=--6933120e57155a7e522e224350b7f80c3259c6ca" class="CToWUd" data-bit="iit"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>

        <tr>
            <td align="center" bgcolor="#ffffff" id="m_5486121498000694681templateUpperBody" style="background:#ffffff;border-bottom-width:0;border-top-width:0" valign="top">
            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
                <tbody>
                    <tr style="border-bottom:1px solid #eff1f3;border-left:1px solid #eff1f3;border-right:1px solid #eff1f3">
                        <td style="padding-top:30px;padding-bottom:30px;padding-left:20px;padding-right:20px" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                            <tbody>
                                <tr>
                                    <td valign="top">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" style="color:#606060;font-family:Verdana,Geneva,sans-serif;font-size:15px;line-height:125%;padding:9px 18px 0px 18px;text-align:left" valign="top"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"> "Dear ${name}," <br>
                                                <br>
                                                "Congratulations! You've been shortlisted for an interview with ${company} for the position of ${position}."</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                            <tbody>
                                <tr>
                                    <td valign="top">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" style="color:#606060;font-family:Verdana,Geneva,sans-serif;font-size:15px;line-height:125%;padding:9px 18px 5px;text-align:left" valign="top">
                                                <table style="min-width:100%;width:100%" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="border:1px solid #c2c7d0;padding:12px;border-radius:4px">
                                                            <h2 align="left" style="color:#01305b;display:block;font-family:arial,helvetica neue,helvetica,sans-serif;font-weight:bold;font-size:18px;font-weight:normal;letter-spacing:normal;line-height:125%;margin:0;padding:0 0 4px;text-align:left">
                                                                <!-- <a href="http://email.postmaster.hackerrankmail.com/c/eJx0kkuOozAQhk_j7BLZLj_wgsVIEdeICrsICAwIjNK5_cgJk6Rb09v_Ua6vIJTOGJQHKoXlyjrFRXFoS02m0a72gpwmoUKQIfBaUeODM7UuDl0puVRccMedBihONRbekbTE0deaK6b4PK0p4ppoObXoe1oWHPuI3XDyUzwMZZvSzOAPkxWT1e12-0jlBJMVbqllsnrql4VCt5BPDCo_jYm-EoNznndJFOcBE70j0uylLjA4C1BgjDBMmp7uDM7eKq-EQBMUNwIKr0l7H0xjgBBqC96JBoVm0qQu0powznmO5ZprkAKyMTE4PxikzhQ6c-j_k2hZPRZ975eVdEkL-j73X0RS_2Ryl_f6-pMrR79ZmS2LgIgchdDcaItgnPNgbMGxsLIxQtUNiMZK-yh9f2wf697Wtu1awckVoYEGChNMCACuAI5OWiCQTfOopOmRzWdZs7BfZr_Nr9fRsvItDgONV1p3IeLXutW4LHh_Tqq2FC8e44zddXxK51fruJCfYqQxYOqmpy1NbkQK3Rb3PGWmD3OdtsXTbtpjwPvx3wuHpRy7vu2GUz_NK1P8-vp3U_njE_0NAAD__zwIBGY" style="text-decoration:none;color:#2ec866;font-family:arial,helvetica neue,helvetica,sans-serif;font-weight:bold;font-size:18px;font-weight:normal" title="Solve maxsubarray!" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://email.postmaster.hackerrankmail.com/c/eJx0kkuOozAQhk_j7BLZLj_wgsVIEdeICrsICAwIjNK5_cgJk6Rb09v_Ua6vIJTOGJQHKoXlyjrFRXFoS02m0a72gpwmoUKQIfBaUeODM7UuDl0puVRccMedBihONRbekbTE0deaK6b4PK0p4ppoObXoe1oWHPuI3XDyUzwMZZvSzOAPkxWT1e12-0jlBJMVbqllsnrql4VCt5BPDCo_jYm-EoNznndJFOcBE70j0uylLjA4C1BgjDBMmp7uDM7eKq-EQBMUNwIKr0l7H0xjgBBqC96JBoVm0qQu0powznmO5ZprkAKyMTE4PxikzhQ6c-j_k2hZPRZ975eVdEkL-j73X0RS_2Ryl_f6-pMrR79ZmS2LgIgchdDcaItgnPNgbMGxsLIxQtUNiMZK-yh9f2wf697Wtu1awckVoYEGChNMCACuAI5OWiCQTfOopOmRzWdZs7BfZr_Nr9fRsvItDgONV1p3IeLXutW4LHh_Tqq2FC8e44zddXxK51fruJCfYqQxYOqmpy1NbkQK3Rb3PGWmD3OdtsXTbtpjwPvx3wuHpRy7vu2GUz_NK1P8-vp3U_njE_0NAAD__zwIBGY&amp;source=gmail&amp;ust=1708921216585000&amp;usg=AOvVaw08ziuU9sQFVSrGmublpw4U"> -->
                                                                    <b>Interview Schedule</b>
                                                                <!-- </a></h2> -->

                                                            <h3 align="left" style="color:#979faf;display:block;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;font-style:normal;font-weight:normal;letter-spacing:normal;line-height:125%;margin:0 0 10px 0;padding:0;text-align:left">  </h3>
                                                            <?> <strong>When :</strong> "${date}  ${time}" <br/></br></span> </td>
                                                            
                                                            
                                                        </tr>
                                                        
                                                    </tbody>
                                                    
                                                </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" style="padding:18px" valign="top">
                                                <table bgcolor="#2EC866" border="0" cellpadding="0" cellspacing="0" style="background:#01305b;border-collapse:separate!important;border-radius:3px">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style="font-family:Arial;font-size:16px;padding:15px;color:#fff" valign="middle"><a href= "https://interviewsync.in/enterInterview"style="color:#ffffff;display:block;font-weight:bold;letter-spacing:normal;line-height:100%;text-align:center;text-decoration:none;word-wrap:break-word" title="Solve maxsubarray!" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://interviewsync.in/"> Start Interview ${roomID}  </a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="left" style="color:#606060;font-family:Verdana,Geneva,sans-serif;font-size:15px;line-height:125%;padding:9px 18px;text-align:left" valign="top">
                                                            <p><span style="font-family:arial,helvetica neue,helvetica,sans-serif">Happy Interviewing,<br>
                                                            The <span class="il">InterviewSync</span> team</span></p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" bgcolor="#eff1f3" id="m_5486121498000694681templateLowerBody" style="background:#eff1f3;border-bottom-width:0;border-top-width:0" valign="top">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
                            <tbody>
                                <tr>
                                    <td valign="top">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" bgcolor="#f8f9fa" id="m_5486121498000694681templateFooter" style="background:#f8f9fa;border-bottom-width:0;border-top-width:0" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
                            <tbody>
                                <tr>
                                    <td valign="top">
                                     
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
    </tbody>
</table>`
}

 const getInterviewerEmailTemplate = (name,position,date,time,candidate,roomID)=>{
return `  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:0;max-width:600px" width="100%">
<tbody>
    <tr>
        <td align="center" bgcolor="#f8f9fa" id="m_5486121498000694681templatePreheader" style="text-align:center;background:#f8f9fa;border-bottom-color:#01305b;border-bottom-style:solid;border-bottom-width:10px;border-top-width:0" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
            <tbody>
                <tr>
                    <td valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                        <tbody>
                            <tr>
                                <td style="text-align:center" valign="top">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center" style="text-align:center;color:#ffffff;font-family:Helvetica;font-size:11px;line-height:125%;padding:9px 18px;text-align:center" valign="top"><img align="center" alt="" height="40" src="https://i.ibb.co/w7Km1HY/Screenshot-from-2024-02-16-21-58-56.png" style="border:0;height:auto!important;margin:0px;margin-bottom:10px;outline:none;text-decoration:none;width:180px" width="180" class="CToWUd" data-bit="iit"> <img src="https://ci3.googleusercontent.com/meips/ADKq_NZDQalQvV-PsbgGm-H5Tnjntd2PUXBOkiS5hG1difYX2owGobDUfDJrw_WmNfGu66b0BlQVIcFU6BAZd5xQRPVug0UhL_XvJ_Ozg6VoqUYDq5-VdXHlYWUyN_k5v9-leOajjRM8fnBeQxgXjRsS-hlSxsF6bMgUPWpX2yeCM30MY_Cew13muiCDkpxBY9tyIbfT3fMCtWRB1iaxoF4LkefdCWzwAUcb3gKRWnTNtIj_wYud7qgHWRZViN6bbot5RG-KS-AUusDiuvfLqXWr291aACFa6s3cEBAyHXI3hC7vFUNbukeLxcYn434E1mKT9IZD8AweSLUprx5IojhgY9d08kq_mkW5qkwau4-UxTYCIj2pgPNeiLPOd8pqFqx3s-gz5238sDQMOWSREH7kwwU6o5DZ2HXjW6Nwlesru-Pj5_gMfv0Qj-b-YM-mifeBApQy5qcDXq7xP__XEwzacKwhFGxs10qAxMNp70XcjM4uUDfWeaKWzcbWi9_WWnAnx-N4oyKF4nf8faa0UXEiPwTV5zvMgr_75lGjR77QS0OZF32_kIZqh9nu52vQaPAM9A=s0-d-e1-ft#https://www.hackerrank.com/signature.png?d=L3VxeEIxUjV2bFRVWnBmSW05RUtncUpXNEpQYzVENW1ZcW1sVEFqaHNrWGJtTWkyVGJOODZOMkhzOWpFeXpoTlFFeFdQMVFnUUhtNEd2ZTJnYjRPVFg1QnROcGxWSEtremNnK1ZzMUE0dmxsckR1Mi80VVFXUEVRY3FlMlZPRWhXNDhHdWJoMlN0U081eDd1UTBmeGpQWGpTNDdWRXpkYzZReEQycGY5S1FWUCtBQjdSMXE3NmJvb3MyQU4yYTczWU03RWEvbEZKSHAyVlQwSjVzOERsZz09LS1zVjRyL2NJY3lWVGdlTzlsSk9sQUNRPT0=--6933120e57155a7e522e224350b7f80c3259c6ca" class="CToWUd" data-bit="iit"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
            </tbody>
        </table>
        </td>
    </tr>

    <tr>
        <td align="center" bgcolor="#ffffff" id="m_5486121498000694681templateUpperBody" style="background:#ffffff;border-bottom-width:0;border-top-width:0" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
            <tbody>
                <tr style="border-bottom:1px solid #eff1f3;border-left:1px solid #eff1f3;border-right:1px solid #eff1f3">
                    <td style="padding-top:30px;padding-bottom:30px;padding-left:20px;padding-right:20px" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                        <tbody>
                            <tr>
                                <td valign="top">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="left" style="color:#606060;font-family:Verdana,Geneva,sans-serif;font-size:15px;line-height:125%;padding:9px 18px 0px 18px;text-align:left" valign="top"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"> "Dear ${name}," <br>
                                            <br>
                                            "I hope this email finds you well. We are pleased to inform you that you have been assigned as the interviewer for the upcoming interview for the position of ${position}"</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                        <tbody>
                            <tr>
                                <td valign="top">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="left" style="color:#606060;font-family:Verdana,Geneva,sans-serif;font-size:15px;line-height:125%;padding:9px 18px 5px;text-align:left" valign="top">
                                            <table style="min-width:100%;width:100%" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td style="border:1px solid #c2c7d0;padding:12px;border-radius:4px">
                                                        <h2 align="left" style="color:#01305b;display:block;font-family:arial,helvetica neue,helvetica,sans-serif;font-weight:bold;font-size:18px;font-weight:normal;letter-spacing:normal;line-height:125%;margin:0;padding:0 0 4px;text-align:left">
                                                            <!-- <a href="http://email.postmaster.hackerrankmail.com/c/eJx0kkuOozAQhk_j7BLZLj_wgsVIEdeICrsICAwIjNK5_cgJk6Rb09v_Ua6vIJTOGJQHKoXlyjrFRXFoS02m0a72gpwmoUKQIfBaUeODM7UuDl0puVRccMedBihONRbekbTE0deaK6b4PK0p4ppoObXoe1oWHPuI3XDyUzwMZZvSzOAPkxWT1e12-0jlBJMVbqllsnrql4VCt5BPDCo_jYm-EoNznndJFOcBE70j0uylLjA4C1BgjDBMmp7uDM7eKq-EQBMUNwIKr0l7H0xjgBBqC96JBoVm0qQu0powznmO5ZprkAKyMTE4PxikzhQ6c-j_k2hZPRZ975eVdEkL-j73X0RS_2Ryl_f6-pMrR79ZmS2LgIgchdDcaItgnPNgbMGxsLIxQtUNiMZK-yh9f2wf697Wtu1awckVoYEGChNMCACuAI5OWiCQTfOopOmRzWdZs7BfZr_Nr9fRsvItDgONV1p3IeLXutW4LHh_Tqq2FC8e44zddXxK51fruJCfYqQxYOqmpy1NbkQK3Rb3PGWmD3OdtsXTbtpjwPvx3wuHpRy7vu2GUz_NK1P8-vp3U_njE_0NAAD__zwIBGY" style="text-decoration:none;color:#2ec866;font-family:arial,helvetica neue,helvetica,sans-serif;font-weight:bold;font-size:18px;font-weight:normal" title="Solve maxsubarray!" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://email.postmaster.hackerrankmail.com/c/eJx0kkuOozAQhk_j7BLZLj_wgsVIEdeICrsICAwIjNK5_cgJk6Rb09v_Ua6vIJTOGJQHKoXlyjrFRXFoS02m0a72gpwmoUKQIfBaUeODM7UuDl0puVRccMedBihONRbekbTE0deaK6b4PK0p4ppoObXoe1oWHPuI3XDyUzwMZZvSzOAPkxWT1e12-0jlBJMVbqllsnrql4VCt5BPDCo_jYm-EoNznndJFOcBE70j0uylLjA4C1BgjDBMmp7uDM7eKq-EQBMUNwIKr0l7H0xjgBBqC96JBoVm0qQu0powznmO5ZprkAKyMTE4PxikzhQ6c-j_k2hZPRZ975eVdEkL-j73X0RS_2Ryl_f6-pMrR79ZmS2LgIgchdDcaItgnPNgbMGxsLIxQtUNiMZK-yh9f2wf697Wtu1awckVoYEGChNMCACuAI5OWiCQTfOopOmRzWdZs7BfZr_Nr9fRsvItDgONV1p3IeLXutW4LHh_Tqq2FC8e44zddXxK51fruJCfYqQxYOqmpy1NbkQK3Rb3PGWmD3OdtsXTbtpjwPvx3wuHpRy7vu2GUz_NK1P8-vp3U_njE_0NAAD__zwIBGY&amp;source=gmail&amp;ust=1708921216585000&amp;usg=AOvVaw08ziuU9sQFVSrGmublpw4U"> -->
                                                                <b>  Interview Details:</b>
                                                            <!-- </a></h2> -->

                                                        <h3 align="left" style="color:#979faf;display:block;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;font-style:normal;font-weight:normal;letter-spacing:normal;line-height:125%;margin:0 0 10px 0;padding:0;text-align:left">  </h3>
                                                        <?> <strong>When :</strong> "${date}  ${time}" <br/></br></span> <span><strong>Candidate: </strong>"${candidate}"</span></span> </span></td>
                                                        
                                                        
                                                    </tr>
                                                    
                                                </tbody>
                                                
                                            </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center" style="padding:18px" valign="top">
                                            <table bgcolor="#2EC866" border="0" cellpadding="0" cellspacing="0" style="background:#01305b;border-collapse:separate!important;border-radius:3px">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" style="font-family:Arial;font-size:16px;padding:15px;color:#fff" valign="middle"><a href= "https://interviewsync.in/enterInterview"style="color:#ffffff;display:block;font-weight:bold;letter-spacing:normal;line-height:100%;text-align:center;text-decoration:none;word-wrap:break-word" title="Solve maxsubarray!" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://interviewsync.in/"> Start Interview ${roomID}  </a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                    <tbody>
                                        <tr>
                                            <td valign="top">
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td align="left" style="color:#606060;font-family:Verdana,Geneva,sans-serif;font-size:15px;line-height:125%;padding:9px 18px;text-align:left" valign="top">
                                                        <p><span style="font-family:arial,helvetica neue,helvetica,sans-serif">Happy Interviewing,<br>
                                                        The <span class="il">InterviewSync</span> team</span></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#eff1f3" id="m_5486121498000694681templateLowerBody" style="background:#eff1f3;border-bottom-width:0;border-top-width:0" valign="top">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
                        <tbody>
                            <tr>
                                <td valign="top">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#f8f9fa" id="m_5486121498000694681templateFooter" style="background:#f8f9fa;border-bottom-width:0;border-top-width:0" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
                        <tbody>
                            <tr>
                                <td valign="top">
                                 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
            </tbody>
        </table>
        </td>
    </tr>
</tbody>
</table>`
}
 

module.exports = {
    getCandidateEmailTemplate,
    getInterviewerEmailTemplate
}