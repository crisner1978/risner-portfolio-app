import { MdEmail, MdPhoneIphone } from "react-icons/md";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import ContactForm from "../../components/contactMeForm/ContactForm";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import SocialButtons from "../../components/social/SocialButtons";
import useViewport from "../../components/useViewport";
import { Background, SocialWrapper } from "./ContactElements";

const Contact = () => {
  //social buttons drop from nav to page
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <Background id="contact">
      <div className="container">
        <SectionTitle
          className="title"
          subheading="Let's Create Something"
          heading="Contact Me"
          upper
        />
        <div className="content">
          <div className="left">
            <ContactInfo icon={<MdPhoneIphone />} text="(561) 781-2819" />
            <ContactInfo icon={<MdEmail />} text="crisner.prsvr@gmail.com" />
            <ContactInfo text="Murfreesboro, TN" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
        <SocialWrapper>
          {width <= breakpoint && <SocialButtons />}
        </SocialWrapper>
      </div>
    </Background>
  );
};

export default Contact;
