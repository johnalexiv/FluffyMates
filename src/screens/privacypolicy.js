import React from 'react';
import { View, StyleSheet,Image, Text, ScrollView} from 'react-native';
import { Constants } from 'expo';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';


export default class privacypolicy extends React.Component {
  static navigationOptions = {
      header: null,
  }

  onBackButton = () => {
		this.props.navigation.goBack(null);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backContainer}>
          <View style={styles.back}>
            <Icon name="chevron-left" size={40} color="#32a9ba" 
              onPress={this.onBackButton}/>
          </View>
        </View>
        <ScrollView>
        <Text style = {styles.title}>Terms of Service</Text>
        <Text style= {styles.subtitle}>Last updated March 28, 2018</Text>
        <Text style= {styles.body} >
      These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and 
      FluffyMates (“we,” “us” or “our”), concerning your access to and use of the FluffyMates app as well as any other media form, media 
      channel, mobile webapp or mobile application related, linked, or otherwise connected thereto (collectively, the “app”). 
      You agree that by accessing the app, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not 
      agree with all of these Terms of Use, then you are expressly prohibited from using the app and you must discontinue use immediately. {"\n"}{"\n"}

      Supplemental Terms of Use or documents that may be posted on the app from time to time are hereby expressly incorporated herein by reference. 
      We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. 
      We will alert you about any changes by updating the “Last updated” date of these Terms of Use and you waive any right to receive specific 
      notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be 
      subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued 
      use of the app after the date such revised Terms are posted. {"\n"}{"\n"}

      The information provided on the app is not intended for distribution to or use by any person or entity in any jurisdiction or country where 
      such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such 
      jurisdiction or country. Accordingly, those persons who choose to access the app from other locations do so on their own initiative and are 
      solely responsible for compliance with local laws, if and to the extent local laws are applicable. </Text>


      <Text style={styles.body}>Option 1: The app is intended for users who are at least 18 years old. Persons under the age of 13 are not permitted
      to register for the app. </Text>
      <Text style={styles.body}>Option 2: [The app is intended for users who are at least 13 years of age.] All users who are minors in the 
      jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent 
      or guardian to use the app. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you 
      using the app. {"\n"}{"\n"}</Text>


      <Text style={styles.subtitle} >INTELLECTUAL PROPERTY RIGHTS</Text>

      <Text style={styles.body} >Unless otherwise indicated, the app is our proprietary property and all source code, databases, functionality, software, 
      webapp designs, audio, video, text, photographs, and graphics on the app (collectively, the “Content”) and the trademarks, service marks, and logos 
      contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other 
      intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions. The Content and 
      the Marks are provided on the app “AS IS” for your information and personal use only. {"\n"}{"\n"}

      Except as expressly provided in these Terms of Use, no part of the app and no Content or Marks may be copied, reproduced, aggregated, republished, 
      uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial 
      purpose whatsoever, without our express prior written permission. {"\n"}{"\n"}

      Provided that you are eligible to use the app, you are granted a limited license to access and use the app and to download or print a copy of any 
      portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly 
      granted to you in and to the app, Content and the Marks.
      {"\n"}{"\n"}</Text>

      <Text style={styles.subtitle}>USER REPRESENTATIONS</Text>

      <Text style={styles.body}>By using the app, you represent and warrant that:</Text>

      <Text style={styles.body}>
        (1) all registration information you submit will be true, accurate, current, and complete; {"\n"}{"\n"}
        (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; {"\n"}{"\n"}
        (3) you have the legal capacity and you agree to comply with these Terms of Use; {"\n"}{"\n"}
        (4) you are not under the age of 13; {"\n"}{"\n"}
        (5) not a minor in the jurisdiction in which you reside[, or if a minor, you have received parental permission to use the app; {"\n"}{"\n"}
        (6) you will not access the app through automated or non-human means, whether through a bot, script or otherwise; {"\n"}{"\n"}
        (7) you will not use the app for any illegal or unauthorized purpose; {"\n"}{"\n"}
        (8) your use of the app will not violate any applicable law or regulation. {"\n"}{"\n"}

        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account 
        and refuse any and all current or future use of the app (or any portion thereof). {"\n"}{"\n"}
      </Text>

      <Text style={styles.subtitle}>USER REGISTRATION</Text>

      <Text style={styles.body} >You may be required to register with the app. You agree to keep your password confidential and will be 
      responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we 
      determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable. {"\n"}{"\n"} </Text>

      <Text style={styles.subtitle} >PROHIBITED ACTIVITIES </Text>
      <Text style={styles.body} >You may not access or use the app for any purpose other than that for which we make the app available. 
      The app may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. {"\n"}{"\n"}
      
      As a user of the app, you agree not to: {"\n"}{"\n"}
    
      1.	systematically retrieve data or other content from the app to create or compile, directly or indirectly, a collection, compilation, 
      database, or directory without written permission from us. {"\n"}{"\n"}
      
      2.	make any unauthorized use of the app, including collecting usernames and/or email addresses of users by electronic or other 
      means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses. {"\n"}{"\n"}
      
      3.	use a buying agent or purchasing agent to make purchases on the app. {"\n"}{"\n"}
      
      4.	use the app to advertise or offer to sell goods and services. {"\n"}{"\n"}

      5.	circumvent, disable, or otherwise interfere with security-related features of the app, including features that 
      prevent or restrict the use or copying of any Content or enforce limitations on the use of the app and/or the Content 
      contained therein.{"\n"}{"\n"}

      6.	engage in unauthorized framing of or linking to the app. {"\n"}{"\n"}

      7.	trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such 
      as user passwords;{"\n"}{"\n"}

      8.	make improper use of our support services or submit false reports of abuse or misconduct. {"\n"}{"\n"}

      9.	engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, 
      robots, or similar data gathering and extraction tools. {"\n"}{"\n"}

      10.	interfere with, disrupt, or create an undue burden on the app or the networks or services connected to the app. {"\n"}{"\n"}
      11.	attempt to impersonate another user or person or use the username of another user. {"\n"}{"\n"}

      12.	sell or otherwise transfer your profile. {"\n"}{"\n"}

      13.	use any information obtained from the app in order to harass, abuse, or harm another person. {"\n"}{"\n"}

      14.	use the app as part of any effort to compete with us or otherwise use the app and/or the Content for any revenue-generating endeavor or commercial enterprise. {"\n"}{"\n"}
      15.	decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the app. {"\n"}{"\n"}

      16.	attempt to bypass any measures of the app designed to prevent or restrict access to the app, or any portion of the app. {"\n"}{"\n"}

      17.	harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the app to you. {"\n"}{"\n"}

      18.	delete the copyright or other proprietary rights notice from any Content. {"\n"}{"\n"}

      19.	copy or adapt the app’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. {"\n"}{"\n"}

      20.	upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including 
      excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any 
      party’s uninterrupted use and enjoyment of the app or modifies, impairs, disrupts, alters, or interferes with the use, 
      features, functions, operation, or maintenance of the app. {"\n"}{"\n"}

      21.	upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information 
      collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, 
      web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).
      {"\n"}{"\n"}

      22.	except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any 
      automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the 
      app, or using or launching any unauthorized script or other software. {"\n"}{"\n"}

      23.	disparage, tarnish, or otherwise harm, in our opinion, us and/or the app. {"\n"}{"\n"}

      24.	use the app in a manner inconsistent with any applicable laws or regulations. {"\n"}{"\n"}

      </Text>


      <Text style={styles.subtitle} >USER GENERATED CONTRIBUTIONS</Text>

      <Text style={styles.body} >The app may invite you to chat, contribute to, or participate in blogs, message boards, online 
      forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, 
      publish, distribute, or broadcast content and materials to us or on the app, including but not limited to text, writings, 
      video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, 
      "Contributions").{"\n"}{"\n"}

      Contributions may be viewable by other users of the app and through third-party webapps. As such, 
      any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any 
      Contributions, you thereby represent and warrant that: {"\n"}{"\n"}

      1.	the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying 
      of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, 
      trademark, trade secret, or moral rights of any third party.{"\n"}{"\n"}
      2.	you are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and 
      to authorize us, the app, and other users of the app to use your Contributions in any manner contemplated by the app and these 
      Terms of Use.{"\n"}{"\n"}
      3.	you have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions 
      to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions 
      in any manner contemplated by the app and these Terms of Use. {"\n"}{"\n"}
      4.	your Contributions are not false, inaccurate, or misleading. {"\n"}{"\n"}
      5.	your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, 
      mass mailings, or other forms of solicitation.{"\n"}{"\n"}
      6.	your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable 
      (as determined by us).{"\n"}{"\n"}
      7.	your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.{"\n"}{"\n"}
      8.	your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against 
      another.{"\n"}{"\n"}
      9.	your Contributions do not violate any applicable law, regulation, or rule.{"\n"}{"\n"}
      10.	your Contributions do not violate the privacy or publicity rights of any third party.{"\n"}{"\n"}
      11.	your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people 
      under the age of 18 in a sexual or violent manner.{"\n"}{"\n"}
      12.	your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health 
      or well-being of minors;{"\n"}{"\n"}
      13.	your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or 
      physical handicap.{"\n"}{"\n"}
      14.	your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable 
      law or regulation.{"\n"}{"\n"}

      Any use of the app in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension 
      of your rights to use the app.{"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}>CONTRIBUTION LICENSE</Text>
      <Text style = {styles.body}>
      By posting your Contributions to any part of the app [or making Contributions accessible to the app by linking your account from the app 
      to any of your social networking accounts], you automatically grant, and you represent and warrant that you have the right to grant, to us 
      an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license 
      to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly 
      display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, 
      your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into 
      other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media 
      formats and through any media channels. {"\n"}{"\n"}

      This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, 
      company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and 
      commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise 
      been asserted in your Contributions. {"\n"}{"\n"}

      We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual 
      property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations 
      in your Contributions provided by you in any area on the app. You are solely responsible for your Contributions to the app and you 
      expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
      {"\n"}{"\n"}

      We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize 
      any Contributions to place them in more appropriate locations on the app; and (3) to pre-screen or delete any Contributions at any time 
      and for any reason, without notice. We have no obligation to monitor your Contributions. {"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}> GUIDELINES FOR REVIEWS</Text>
      <Text style = {styles.body}>
        We may provide you areas on the app to leave reviews or ratings. When posting a review, you must comply with the following criteria: {"\n"}{"\n"}

        (1) you should have firsthand experience with the person/entity being reviewed; {"\n"}{"\n"}

        (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; {"\n"}{"\n"}

        (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, 
        sexual orientation, or disability; {"\n"}{"\n"}

        (4) your reviews should not contain references to illegal activity; {"\n"}{"\n"}

        (5) you should not be affiliated with competitors if posting negative reviews; {"\n"}{"\n"}

        (6) you should not make any conclusions as to the legality of conduct; {"\n"}{"\n"}

        (7) you may not post any false or misleading statements; {"\n"}{"\n"}

        (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative. {"\n"}{"\n"}

        We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews 
        or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, 
        and do not necessarily represent our opinions or the views of any of our affiliates or partners. {"\n"}{"\n"}

        We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. 
        By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, 
        assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, 
        perform, and/or distribute all content relating to reviews.{"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}>MOBILE APPLICATION LICENSE </Text>
      <Text style = {styles.body}>
        Use License {"\n"}{"\n"}

        If you access the app via a mobile application, then we grant you a revocable, non-exclusive, non-transferable, limited 
        right to install and use the mobile application on wireless electronic devices owned or controlled by you, and to access and 
        use the mobile application on such devices strictly in accordance with the Terms of Use of this mobile application license 
        contained in these Terms of Use. {"\n"}{"\n"}

        You shall not: {"\n"}{"\n"}

        (1) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application; {"\n"}{"\n"}
        (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application; {"\n"}{"\n"}
        (3) violate any applicable laws, rules, or regulations in connection with your access or use of the application; {"\n"}{"\n"}
        (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application; {"\n"}{"\n"}
        (5) use the application for any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended {"\n"}{"\n"}
        (6) make the application available over a network or other environment permitting access or use by multiple devices or users at the same time; {"\n"}{"\n"}
        (7) use the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application; {"\n"}{"\n"}
        (8) use the application to send automated queries to any webapp or to send any unsolicited commercial e-mail; {"\n"}{"\n"}
        (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application. {"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}> Apple and Android Devices</Text>
      <Text style = {styles.body}>
        The following terms apply when you use a mobile application obtained from either the Apple Store or Google Play (each an “App Distributor”) to access the app: {"\n"}{"\n"}

        (1) the license granted to you for our mobile application is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; {"\n"}{"\n"}
        (2) we are responsible for providing any maintenance and support services with respect to the mobile application as specified in the Terms of Use of this mobile application license contained in these Terms of Use or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the mobile application; {"\n"}{"\n"}
        (3) in the event of any failure of the mobile application to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the mobile application, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the mobile application; {"\n"}{"\n"}
        (4) you represent and warrant that (i) you are not located in a country that is subject to a U.S. government embargo, or that has been designated by the U.S. government as a “terrorist supporting” country and (ii) you are not listed on any U.S. government list of prohibited or restricted parties; {"\n"}{"\n"}
        (5) you must comply with applicable third-party terms of agreement when using the mobile application, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the mobile application; {"\n"}{"\n"}
        (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the Terms of Use in this mobile application license contained in these Terms of Use, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the Terms of Use in this mobile application license contained in these Terms of Use against you as a third-party beneficiary thereof. {"\n"}{"\n"}
      </Text>
      
      <Text style = {styles.subtitle}>SOCIAL MEDIA</Text>
      <Text style = {styles.body}>
      As part of the functionality of the app, you may link your account with online accounts you have with third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party Account login information through the app; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable Terms of Use that govern your use of each Third-Party Account.
      You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the Terms of Use that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.
      By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the “Social Network Content”) so that it is available on and through the app via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account.
      Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the app.
      Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the app. You will have the ability to disable the connection between your account on the app and your Third-Party Accounts at any time.
      PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content.
      You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the app.
      You can deactivate the connection between the app and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>SUBMISSIONS</Text>
      <Text style = {styles.body}>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the app ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
      You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>THIRD-PARTY WEBappS AND CONTENT</Text>
      <Text style = {styles.body}>The app may contain (or you may be sent via the app) links to other webapps ("Third-Party Webapps") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").
      Such Third-Party Webapps and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Webapps accessed through the app or any Third-Party Content posted on, available through, or installed from the app, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Webapps or the Third-Party Content.
      Inclusion of, linking to, or permitting the use or installation of any Third-Party Webapps or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the app and access the Third-Party Webapps or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern.
      You should review the applicable terms and policies, including privacy and data gathering practices, of any webapp to which you navigate from the app or relating to any applications you use or install from the app. Any purchases you make through Third-Party Webapps will be through other webapps and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party.
      You agree and acknowledge that we do not endorse the products or services offered on Third-Party Webapps and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Webapps.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>ADVERTISERS</Text>
      <Text style = {styles.body}>
      We allow advertisers to display their advertisements and other information in certain areas of the app, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the app and any services provided on the app or products sold through those advertisements.
      Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the app, including, but not limited to, intellectual property rights, publicity rights, and contractual rights. [As an advertiser, you agree that such advertisements are subject to our Digital Millennium Copyright Act (“DMCA”) Notice and Policy provisions as described below, and you understand and agree there will be no refund or other compensation for DMCA takedown-related issues.
      We simply provide the space to place such advertisements, and we have no other relationship with advertisers.
      {"\n"}{"\n"}</Text>

<Text style = {styles.subtitle}>APP MANAGEMENT</Text>

<Text style = {styles.body}>We reserve the right, but not the obligation, to: {"\n"}{"\n"}
      (1) monitor the app for violations of these Terms of Use; {"\n"}{"\n"}
      (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; {"\n"}{"\n"}
      (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; {"\n"}{"\n"}
      (4) in our sole discretion and without limitation, notice, or liability, to remove from the app or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; {"\n"}{"\n"}
      (5) otherwise manage the app in a manner designed to protect our rights and property and to facilitate the proper functioning of the app.{"\n"}{"\n"}
{"\n"}{"\n"}</Text>

<Text style = {styles.subtitle}>PRIVACY POLICY</Text>

<Text style = {styles.body}>We care about data privacy and security. Please review our Privacy Policy. By using the app, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the app is hosted in the United States.
      If you access the app from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the app or Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
      [Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requiapp and verifiable parental consent, we will delete that information from the app as quickly as is reasonably practical.
{"\n"}{"\n"}</Text>

<Text style = {styles.subtitle}>DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY</Text>

<Text style = {styles.body}>Notifications

      We respect the intellectual property rights of others. If you believe that any material available on or through the app infringes upon any copyright you own or control, please immediately notify our Designated Copyright Agent using the contact information provided below (a “Notification”).{"\n"}{"\n"}

       A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the app infringes your copyright, you should consider first contacting an attorney.{"\n"}{"\n"}

       All Notifications should meet the requirements of DMCA 17 U.S.C. § 512(c)(3) and include the following information:{"\n"}{"\n"}

       (1) A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;{"\n"}{"\n"}

       (2) identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on the app are covered by the Notification, a representative list of such works on the app;{"\n"}{"\n"}

       (3) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;{"\n"}{"\n"}

       (4) information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email address at which the complaining party may be contacted;{"\n"}{"\n"}

       (5) a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law{"\n"}{"\n"}

       (6) a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed upon.{"\n"}{"\n"}

       Counter Notification{"\n"}{"\n"}
       If you believe your own copyrighted material has been removed from the app as a result of a mistake or misidentification, you may submit a written counter notification to [us/our Designated Copyright Agent] using the contact information provided below (a “Counter Notification”).{"\n"}{"\n"}

       To be an effective Counter Notification under the DMCA, your Counter Notification must include substantially the following:{"\n"}{"\n"}

       (1) identification of the material that has been removed or disabled and the location at which the material appeared before it was removed or disabled;{"\n"}{"\n"}

       (2) a statement that you consent to the jurisdiction of the Federal District Court in which your address is located, or if your address is outside the United States, for any judicial district in which we are located;{"\n"}{"\n"}

       (3) a statement that you will accept service of process from the party that filed the Notification or the party's agent;{"\n"}{"\n"}

       (4) your name, address, and telephone number; {"\n"}{"\n"}

       (5) a statement under penalty of perjury that you have a good faith belief that the material in question was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; {"\n"}{"\n"}

       (6) your physical or electronic signature. {"\n"}{"\n"}

      If you send us a valid, written Counter Notification meeting the requirements described above, we will restore your removed or disabled material, unless we first receive notice from the party filing the Notification informing us that such party has filed a court action to restrain you from engaging in infringing activity related to the material in question.{"\n"}{"\n"}

      Please note that if you materially misrepresent that the disabled or removed content was removed by mistake or misidentification, you may be liable for damages, including costs and attorney's fees. Filing a false Counter Notification constitutes perjury.{"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}>COPYRIGHT INFRINGEMENTS</Text>

      <Text style = {styles.body}>We respect the intellectual property rights of others. If you believe that any material available on or through the app infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification.
      Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the app infringes your copyright, you should consider first contacting an attorney.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>TERMS AND TERMINATION</Text>
      <Text style = {styles.body}>These Terms of Use shall remain in full force and effect while you use the app. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE app (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE app OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.
            In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
            {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>MODIFICATIONS AND INTERRUPTIONS</Text>
      <Text style = {styles.body}>
            We reserve the right to change, modify, or remove the contents of the app at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our app. We also reserve the right to modify or discontinue all or part of the app without notice at any time.
            We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the app.
            We cannot guarantee the app will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the app, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the app at any time or for any reason without notice to you.
            You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the app during any downtime or discontinuance of the app. Nothing in these Terms of Use will be construed to obligate us to maintain and support the app or to supply any corrections, updates, or releases in connection therewith.
            {"\n"}{"\n"}
            </Text>

      <Text style = {styles.subtitle}>GOVERNING LAW</Text>

      <Text style = {styles.body}>
        These Terms of Use and your use of the app are governed by and construed in accordance with the laws of the State of Nevada applicable to agreements made and to be entirely performed within the State/Commonwealth of Nevada, without regard to its conflict of law principles.
        {"\n"}{"\n"}
        </Text>

      <Text style = {styles.subtitle}>DISPUTE RESOLUTION</Text>
      <Text style = {styles.body}>

      Option 1: Any legal action of whatever nature brought by either you or us (collectively, the “Parties” and individually, a “Party”) shall be commenced or prosecuted in the state and federal courts located in Clark County, Nevada, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts.
      Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms of Use. In no event shall any claim, action, or proceeding brought by either Party related in any way to the app be commenced more than ______ years after the cause of action arose.
      {"\n"}{"\n"}
      Option 2: Informal Negotiations
      To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each a "Dispute" and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least ______ days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
      {"\n"}{"\n"}
      Binding Arbitration
      If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
      The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA webapp www.adr.org.
      Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. [If such costs are determined to by the arbitrator to be excessive, we will pay all arbitration fees and expenses.]
      The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so.
      Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Clark County, Nevada. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
      If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Clark County, Nevada, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts.
      Application of the United Nations Convention on Contracts for the International Sale of Goods and the the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms of Use.
      In no event shall any Dispute brought by either Party related in any way to the app be commenced more than _____ years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
      {"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}>Option 3: Binding Arbitration</Text>
      <Text style = {styles.body}>
      To expedite resolution and control the cost of any dispute, controversy or claim related to these Terms of Use (each a "Dispute" and collectively, “Disputes”), any Dispute brought by either you or us (individually, a “Party” and collectively, the “Parties”) shall be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.

      The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA webapp www.adr.org.

      Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. [If such costs are determined to by the arbitrator to be excessive, we will pay all arbitration fees and expenses.]

      The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so.

      Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Clark County, Nevada. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.

      If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Clark County, Nevada, and the Parties hereby consent to, and waive all defenses of lack of, personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms of Use.

      In no event shall any Dispute brought by either Party related in any way to the app or Services be commenced more than ______ years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
      {"\n"}{"\n"}

      Option 2/Option 3: Restrictions{"\n"}{"\n"}

      The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full 
      extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority 
      for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right 
      or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any 
      other persons.
      {"\n"}{"\n"}

      Option 2/Option 3: Exceptions to [Informal Negotiations and] Arbitration
      The Parties agree that the following Disputes are not subject to the above provisions concerning [informal negotiations and] binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.
      If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
      {"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}>CORRECTIONS</Text>

      <Text style = {styles.body}>There may be information on the app that contains typographical errors, inaccuracies, or omissions that may relate to the app, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the app at any time, without prior notice.
      {"\n"}{"\n"}
      </Text>

      <Text style = {styles.subtitle}>DISCLAIMER</Text>

      <Text style = {styles.body}>THE app IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE app SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE app AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

      WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE app’S CONTENT OR THE CONTENT OF ANY WEBappS LINKED TO THIS app AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE app, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE app, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE app BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE app.

      WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE app, ANY HYPERLINKED WEBapp, OR ANY WEBapp OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.

      AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>LIMITATIONS OF LIABILITY</Text>

      <Text style = {styles.body}>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE app, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

      [NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO [THE LESSER OF] [THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE 3 MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.

      CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.]
      </Text>

      <Text style = {styles.subtitle}>INDEMNIFICATION</Text>

      <Text style = {styles.body}>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) [your Contributions]; (2) use of the app; (3) breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the app with whom you connected via the app.

      Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>USER DATA</Text>

      <Text style = {styles.body}>We will maintain certain data that you transmit to the app for the purpose of managing the app, as well as data relating to your use of the app. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the app.

      You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Text>

      <Text style = {styles.body}>Visiting the app, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the app, satisfy any legal requirement that such communication be in writing.

      YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE app.

      You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>CALIFORNIA USERS AND RESIDENTS</Text>

      <Text style = {styles.body}>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
      {"\n"}{"\n"}</Text>

      <Text style = {styles.subtitle}>MISCELLANEOUS</Text>

      <Text style = {styles.body}>These Terms of Use and any policies or operating rules posted by us on the app constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.

      If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the app.

      You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.
      {"\n"}{"\n"}</Text>


      <Text style = {styles.subtitle}>CONTACT US</Text>

      <Text style = {styles.body}>In order to resolve a complaint regarding the app or to receive further information regarding use of the app, please contact us at:
      FluffyMates@gmail.com {"\n"}{"\n"}
      </Text>

        <Text style = {styles.subtitle}>Privacy Policy</Text>
        <Text style = {styles.body}>This SERVICE is provided by at no cost and is intended for use as is.
          This page is used to inform app visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
          If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at FluffyMates unless otherwise defined in this Privacy Policy.
          Information Collection and Use{"\n"}{"\n"}

          For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request is retained on your device and is not collected by us in any way
          The app does use third party services that may collect information used to identify you.
          Link to privacy policy of third party service providers used by the app{"\n"}{"\n"}
          •	Google Play Services{"\n"}{"\n"}
          Log Data{"\n"}{"\n"}
          > We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
          {"\n"}{"\n"}

          Cookies{"\n"}{"\n"}
          Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the app that you visit and are stored on your device internal memory.
          This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collection information and to improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          {"\n"}{"\n"}

          Service Providers{"\n"}{"\n"}
          We may employ third-party companies and individuals due to the following reasons:{"\n"}{"\n"}
          •	To facilitate our Service;{"\n"}{"\n"}
          •	To provide the Service on our behalf;{"\n"}{"\n"}
          •	To perform Service-related services; or{"\n"}{"\n"}
          •	To assist us in analyzing how our Service is used.
          We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
          {"\n"}{"\n"}
          Security{"\n"}{"\n"}
          We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          {"\n"}{"\n"}
          Links to Other Sites{"\n"}{"\n"}
          This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, I strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          {"\n"}{"\n"}
          Children’s Privacy{"\n"}{"\n"}
          These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we will immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.
          {"\n"}{"\n"}
          Changes to This Privacy Policy{"\n"}{"\n"}
          We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
          Contact Us{"\n"}{"\n"}
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at FluffyMates@gmail.com
          </Text>
		    </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  title: {
      marginTop: 10,
      fontSize: 30,
      textAlign: 'center'
  },
  subtitle: {
    fontSize:15,
    marginTop:0,
    textAlignVertical:'center',
    textAlign: 'center',
    color: '#4d4d4d',
  },
  body:
  {
    fontSize:12,
    marginTop:10,
    marginLeft:15,
    marginRight: 15,
    textAlignVertical:'center',
    textAlign: 'left',
    color: '#4d4d4d'
  },
  back: {
    flex: 1,
  },
  backContainer: {
    height: 45,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});
