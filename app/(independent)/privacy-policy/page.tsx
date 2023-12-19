"use client";
import {
  Box,
  Center,
  Container,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";

const PrivacyPolicy = () => {
  return (
    <Box my={10}>
      <Container maxW="container.xl" display="flex" flexDir="column" gap={3}>
        <Center>
          <Text as="h2">Privacy Policy</Text>
        </Center>

        <Text as="p" className="b3">
          {
            "This Privacy Policy describes the policies of Education World Wide, United States of America, State of Florida 3401 Gulf Shore Road Naples, FL 33331, Florida 3401, United States of America (the), email: info@eduww.net, phone: +1 561-404-4557 on the collection, use and disclosure of your information that we collect when you use our website ( eduww.net ). (the “Service”). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service."
          }
        </Text>

        <Text as="p" className="b3">
          {
            "We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page."
          }
        </Text>

        <Text as="p" className="b3">
          HOW WE USE YOUR INFORMATION:
        </Text>

        <Text as="p" className="b3">
          We will use the information that we collect about you for the
          following purposes:
        </Text>
        <UnorderedList>
          <ListItem>Marketing/ Promotional</ListItem>
          <ListItem>Support</ListItem>
        </UnorderedList>

        <Text as="p" className="b3">
          {
            "If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law."
          }
        </Text>

        <Text as="p" className="b3">
          HOW WE USE YOUR INFORMATION:
        </Text>
        <Text as="p" className="b3">
          {
            "We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances as described below:"
          }
        </Text>

        <UnorderedList>
          <ListItem>Analytics</ListItem>
        </UnorderedList>

        <Text as="p" className="b3">
          {
            "We require such third party’s to use the personal information we transfer to them only for the purpose for which it was transferred and not to retain it for longer than is required for fulfilling the said purpose."
          }
        </Text>

        <Text as="p" className="b3">
          {
            "We may also disclose your personal information for the following: (1) to comply with applicable law, regulation, court order or other legal process; (2) to enforce your agreements with us, including this Privacy Policy; or (3) to respond to claims that your use of the Service violates any third-party rights. If the Service or our company is merged or acquired with another company, your information will be one of the assets that is transferred to the new owner."
          }
        </Text>

        <Text as="p" className="b3">
          YOUR RIGHTS:
        </Text>
        <Text as="p" className="b3">
          {
            "Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at info@eduww.net. We will respond to your request in accordance with applicable law."
          }
        </Text>

        <Text as="p" className="b3">
          You may opt-out of direct marketing communications or the profiling we
          carry out for marketing purposes by writing to us at info@eduww.net.
        </Text>

        <Text as="p" className="b3">
          Do note that if you do not allow us to collect or process the required
          personal information or withdraw the consent to process the same for
          the required purposes, you may not be able to access or use the
          services for which your information was sought.
        </Text>

        <Text as="p" className="b3">
          COOKIES ETC.
        </Text>

        <Text as="p" className="b3">
          To learn more about how we use these and your choices in relation to
          these tracking technologies, please refer to our Cookie Policy.
        </Text>

        <Text as="p" className="b3">
          SECURITY
        </Text>

        <Text as="p" className="b3">
          {
            "The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk."
          }
        </Text>

        <Text as="p" className="b3">
          THIRD PARTY LINKS & USE OF YOUR INFORMATION:
        </Text>

        <Text as="p" className="b3">
          Our Service may contain links to other websites that are not operated
          by us. This Privacy Policy does not address the privacy policy and
          other practices of any third parties, including any third party
          operating any website or service that may be accessible via a link on
          the Service. We strongly advise you to review the privacy policy of
          every site you visit. We have no control over and assume no
          responsibility for the content, privacy policies or practices of any
          third party sites or services.
        </Text>

        <Text as="p" className="b3">
          GRIEVANCE / DATA PROTECTION OFFICER:
        </Text>

        <Text as="p" className="b3">
          If you have any queries or concerns about the processing of your
          information that is available with us, you may email our Grievance
          Officer at Education World Wide, United States of America, State of
          Florida 3401 Gulf Shore Road Naples, FL 33331, email: info@eduww.net.
          We will address your concerns in accordance with applicable law.
        </Text>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
