import { Footer } from "@/components/footer/Footer";
import { TopNav } from "@/components/landing/_components";

export default function Page() {
  return (
    <div className="">
      
        <TopNav />
        <section className="flex flex-col gap-4 text-cakkie items-center justify-center w-full mx-auto py-6 px-4 sm:px-10 md:px-20 sm:py-10">
          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h3 className="text-3xl font-bold">Privacy Policy</h3>
            <p className="text-auto">
              This Privacy Policy describes Cakkie's policies and procedures for
              collecting, using, and disclosing information via www.cakkie.com
              site. It includes Cakkie’s-owned or controlled websites, features,
              applications, widgets, or online services. Furthermore, it covers
              any data Cakkie gathers offline concerning the services
            </p>
            <p className="text-auto">
              This Privacy Policy explains your options for using, accessing,
              updating, and correcting your personal information. Please keep in
              mind that we combine the information we collect from you via the
              site, offline or feedback from services rendered.
            </p>
            <p className="text-auto">
              Certain features or services mentioned in this Privacy Policy may
              not be available on the service at all times. Please also review our
              Terms of Service, which govern your use of the service and are
              available at{" "}
              <span className="font-semibold">
                <a href="https://cakkie.com/terms-and-conditions">
                  https://cakkie.com/terms-and-conditions
                </a>
              </span>
            </p>
            <p className="text-auto">
              We've provided summaries in this Privacy Policy in italics
              throughout to help you understand what information we collect, how
              we use it, and what choices or rights you may have. While these
              summaries help to explain some of these concepts simply and clearly,
              we encourage you to read the entire Privacy Policy to fully
              understand our data practices.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">INFORMATION COLLECTION</h4>
            <p className="text-auto">
              Clients, Freelancers, Delivery Agents, and Site Visitors are all
              examples of Service Users (as each is defined in the{" "}
              <span className="font-semibold">User Agreement</span>).
            </p>
            <p className="font-semibold">Information You Give Us</p>
            <p className="text-auto italic">
              When you use the service, you may provide us with personal
              information about yourself. This may include your name and contact
              information, financial information to make or receive payment for
              services obtained through the Cakkie platform, or information to
              assist us in filling out tax forms. When you use the service, we may
              collect information about your use of the service; this allows us to
              improve our services for you.
            </p>

            <ol className="text-auto list-disc px-5 md:px-10">
              <li>
                <span className="font-semibold">Payment Information:</span> If you
                use the service to make or receive payments, we will collect
                payment information such as credit card or other financial account
                information, as well as your billing address.
              </li>
              <li>
                <span className="font-semibold">Identity Verification:</span> We
                may collect Personal Information, such as your date of birth. We
                may request documents to verify this information, such as a copy
                of your government-issued identification or photo, or a billing
                statement.
              </li>
              <li>
                <span className="font-semibold">
                  Biometric Identifiers or service Interaction Information:
                </span>{" "}
                Through facial recognition and other technologies, we may collect
                Personal Information to verify your identity and detect fraud,
                identity theft, or other misuse of your account. This could be a
                picture of your face, a selfie, or information about your
                interactions with the service. We may request documents, such as a
                copy of your government-issued ID, to verify this information.
                Cakkie may require you to take and submit another or updated image
                of your face for comparison to your government-issued ID from time
                to time. The biometric identifiers or information collected is
                only used to verify your identity and to ensure platform security
                and use integrity.
              </li>
              <li>
                <span className="font-semibold">General Audience Service:</span>{" "}
                The service is intended for users 18 and older. We do not collect
                Personal Information from children under the age of 18. If we
                learn that a child under the age of 18 has provided us with
                Personal Information, we will make commercially reasonable efforts
                to delete that information from our records. If you are the parent
                or legal guardian of a child under the age of 18 and believe that
                Cakkie has obtained Personal I nformation about your child, please
                contact us at support@cakkie.com
              </li>
              <li>
                <span className="font-semibold">
                  Non-Identifying Information/Usernames:
                </span>{" "}
                Other information, such as zip codes, demographic data,
                information about your use of the service, and general
                project-related data, may also be collected (Non-Identifying
                Information). We reserve the right to combine information
                collected from Cakkie users, whether registered or not. In some
                cases, we may convert Personal Information (generally, email
                addresses) into a type of Non-Identifying Information known as
                "Hashed Information" in this Privacy Policy. This is typically
                accomplished by converting information into code using a
                mathematical process (commonly known as a hash function). The code
                does not directly identify you, but it may be used to link your
                activity and interests.
              </li>
              <li>
                <span className="font-semibold">
                  Combination of Personal and Non-Identifying Information:
                </span>{" "}
                When non-identifying information is combined, it can sometimes be
                used to identify an individual. For example, combining a birth
                date and a first name may be able to identify a person even if the
                birthday or first name alone cannot. When combined with other
                non-identifying information, the same pieces of information are
                considered Non-Identifying Information (for example, your viewing
                preferences). Cakkie may combine your Personal Information with
                Non-Identifying Information, but the combined information will be
                treated as Personal Information.
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              Information Received from Third Parties
            </h4>
            <p className="italic">
              Third parties may also provide us with information about you. If we
              combine that information with information about you collected
              through the Service, we will still treat the combined information in
              accordance with this Privacy Policy.
            </p>
            <p className="text-auto">
              We may also receive information about you from third parties. For
              example, we may supplement the information we collect with outside
              records, or third parties may provide information in connection with
              a co-marketing agreement or at your request (such as if you choose
              to sign in with a third-party service). If we combine information we
              receive from others with information we collect through the Service,
              we will treat the combined information in accordance with this
              Privacy Policy.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              Information Collected Automatically
            </h4>
            <p className="italic">
              When you use our Services, we, like other online businesses, receive
              technical information. We use these technologies to analyze how
              people use the Service, to improve how our Site functions, to save
              your log-in information for future sessions, and to serve you with
              advertisements that may be of interest to you.
            </p>
            <p className="text-auto">
              When you access or interact with the Service, we and our third-party
              service providers, including analytics and third-party content
              providers, may automatically collect certain information from you.
              This information may include, among other things, the browser and
              operating system you are using, the URL or advertisement that
              referred you to the Service, the search terms you entered into a
              search engine that led you to the Service, areas within the Service
              that you visited, which links you clicked on, which pages or content
              you viewed and for how long, and other similar information and
              statistics about your interactions, such as content response times,
              download errors, and other similar information and statistics about
              your interactions. We may combine this automatically collected log
              information with other information we collect about you. We do this
              to improve the services we offer you, and to improve marketing,
              analytics, and site functionality.
            </p>
            <p>
              The information we collect also includes the Internet Protocol (IP)
              address or other unique device identifiers (Device Identifier) for
              any device (computer, mobile phone, tablet, etc.) used to access the
              Service. A Device Identifier is a number that is automatically
              assigned or connected to the device you use to access the Service,
              and our servers identify your device by its Device Identifier. Some
              mobile service providers may also provide us or our third-party
              service providers with information regarding the physical location
              of the device used to access the Service.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <p className="italic font-semibold">
              Cakkie and its partners use cookies or similar technologies to
              analyze trends, administer the website, track users' movements
              around the website, desktop app, and mobile app, and gather
              demographic information about our overall user base. The following
              technologies may be used to collect information automatically from
              Cakkie Users:
            </p>
            <ol className="italic text-auto list-disc px-5 md:px-10">
              <li>
                <span className="font-semibold">Cookies:</span> Like many
                websites, we and our marketing partners, affiliates, analytics,
                and service providers use “cookies” to collect information. A
                cookie is a small data file that we transfer to your computer’s
                hard disk for record-keeping purposes. We use both persistent
                cookies that remain on your computer or similar device (such as to
                save your registration ID and login password for future logins to
                the Service and to track your compliance with the Cakkie Terms of
                Service) and session ID cookies, which expire at the end of your
                browser session (for example, to enable certain features of the
                Service, to better understand how Cakkie Users interact with the
                Service and to monitor aggregate usage by Cakkie Users and web
                traffic routing on the Service). You can control the use of
                cookies at the individual browser level, but if you choose to
                disable cookies, it may limit your use of certain features or
                functionality of the Service.
              </li>
              <li>
                <span className="font-semibold">Web Beacons:</span> We and our
                marketing partners, affiliates, analytics, and service providers
                may also employ software technology known as “web beacons” and/or
                “tracking tags” to help us keep track of what content on our
                Service is effective and to serve relevant advertising to you. Web
                beacons are small graphics with a unique identifier that may be
                invisible to you, and which are used to track the online activity
                of Internet users. Web beacons are embedded in the web pages you
                review or email messages you receive. Web beacons or similar
                technologies may be used for several purposes, including, without
                limitation, counting visitors to our Service, monitoring how
                Cakkie Users navigate the Service, counting how many emails were
                sent that were opened, or counting how many particular articles or
                links were viewed.
              </li>
              <li>
                <span className="font-semibold">Embedded Scripts:</span> We and
                our marketing partners, affiliates, analytics, and service
                providers may also employ software technology known as an Embedded
                Script. An Embedded Script is programming code that is designed to
                collect information about your interactions with the Service, such
                as the links you click on. The code is temporarily downloaded onto
                your computer or other device and is deactivated or deleted when
                you disconnect from the Service.
              </li>
            </ol>
            <p>
              In addition, we and our marketing partners, affiliates, analytics,
              and service providers may use a variety of other technologies (such
              as tags) that collect similar information for security and fraud
              detection purposes and we may use third parties to perform these
              services on our behalf.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">User Profiles</h4>
            <p className="italic">
              All users may create a profile, with certain or all information
              publicly available.
            </p>
            <p className="text-auto">
              You may have the opportunity to update your profile to that which
              consists of information about you and may include Personal
              Information, photographs, examples of your work, information on work
              previously performed via the Service, skills, feedback/rating
              information, and other information, including your username
              (“Profile”). The information in your Profile may be visible to all
              Cakkie Users and the general public subject to the privacy choices
              you make within your Cakkie Profile. If you choose to make your
              profile publicly visible, your profile will be visible to the entire
              Internet, including clients, freelancers, visitors, and search
              engines such as Google and Bing. You may edit certain information in
              your Profile via your account and may choose to limit who can view
              certain content you post to your Profile. Also, you may update your
              profile to that which gets notified for deliveries with the
              obligation to dispatch them.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">Identity Verification</h4>
            <p className="italic">
              We place a premium trust in our Service, so we may take steps to
              verify your identity
            </p>
            <p className="text-auto">
              Before a Freelancer and delivery agent can complete registration on
              the Service, or at any time thereafter, we may request or re-request
              identity verification. Without limiting how we request identity
              verification, we may require Freelancers to participate in a video
              call after submitting their government-issued ID to enable us to
              confirm that the Freelancer or delivery agent is indeed the
              individual in the ID. We may record such video calls and take
              screenshots of the user during the call. Cakkie may use the
              information obtained from Identity Verification for purposes of
              verifying your identity, enforcing our Terms of Service and other
              agreements, and preventing fraud.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">Messaging</h4>
            <p className="text-auto">
              Freelancers, Delivery agents, and Clients may communicate with each
              other through the Service. For example, Freelancers, Delivery
              agents, and Clients may wish to discuss Client needs and Freelancer
              work proposals. If you communicate with a Client, that Client will
              also be a “data controller” to such communications.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">Testimonials</h4>
            <p className="text-auto">
              We display personal testimonials of satisfied customers on our
              Service, in addition to other endorsements. With your consent, we
              may post your testimonial along with your name.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              Work Listings Through the Service
            </h4>
            <p className="text-auto">
              If you choose to post a work listing via the Service as a Client,
              the contents of such listing will be viewable publicly, unless you
              designate the listing as only viewable through the Service or as
              private using the settings available on the applicable website. Work
              listings include information such as budget, location, history of
              work listing(s) by the Client, the names of other Freelancers
              performing work for the Client, Client feedback and rating
              information, and timing of project performance.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">Feedback</h4>
            <p className="italic">
              We collect public and private feedback from Cakkie Users about their
              experience with other Cakkie Users of our Service. Please note that
              any public feedback that you provide via the Service about your
              experience with other Cakkie Users of our Service or that is
              provided about you by other Users is publicly viewable via the
              Service. On rare occasions, we may remove feedback under the
              relevant provisions of our Terms of Service. Any private feedback
              that you provide via the Service about your experience with other
              Cakkie Users of our Service or that is provided about you by other
              Users will not be publicly viewable via the service. We use this information to respond to your
              inquiries, improve the Service and how our Site functions, and
              develop new products and features.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              Email to Friends and Referral Program
            </h4>
            <p className="italic">
              Cakkie lets you send project postings to friends via email. Cakkie
              also offers the ability to send friends emails about providing or
              purchasing services through the Service. You should only provide
              Cakkie contact information from individuals who are familiar to you
              and with their consent. If you choose to use either feature, your
              friend’s email address will be used to send the requested posting
              and your email address will be used to copy you on the message to
              your friend or to send the message on your behalf. Cakkie stores
              this information for the sole purpose of sending this one-time email
              and tracking the success of our referral program.Your friend may
              contact us at support@cakkie.com to request that we remove this
              information from our database.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">USE OF INFORMATION</h4>
            <p className="text-auto">
              We use information collected through the Service to provide and
              improve the Service, process your requests, prevent fraud, provide
              you with information and advertising that may interest you, comply
              with the law, and as otherwise permitted with your consent.
            </p>

            <h4 className="text-xl font-semibold">
              WE USE THE INFORMATION WE COLLECT:
            </h4>

            <ol className="text-auto list-disc px-5 md:px-10">
              <li>
                To provide and improve the Service, complete your transactions,
                address your inquiries, process your registration, verify the
                information you provide is valid, and for compliance and internal
                business purposes.
              </li>
              <li>
                To contact you with administrative communications and Cakkie
                newsletters, marketing or promotional materials (on behalf of
                Cakkie or third parties), and other information that may be of
                interest to you.
              </li>
              <li>
                To tailor the content we display to you and offers we may present
                to you, both on the Service and elsewhere online.
              </li>
              <li>
                To administer and develop our business relationship with you and,
                if applicable, the corporation or other legal entity you
                represent.
              </li>
              <li>
                To assess your proposal to perform a freelance project for Cakkie
                and prepare related governmental and internal statistics reports.
              </li>
              <li>
                To enforce and comply with the law, including to conduct an
                investigation, to protect the property and rights of Cakkie or a
                third party, to protect the safety of the public or any person, or
                to prevent or stop activity we may consider to be or to pose a
                risk of being, illegal, fraudulent, unethical or legally
                actionable activity. We may also use Device Identifiers to
                identify Cakkie Users.
              </li>
              <li>
                For the purposes disclosed at the time you provide your
                information, with your consent, and as further described in this
                Privacy Policy.
              </li>
            </ol>

            <p className="text-auto font-semibold">
              We use your Personal Information for the purposes described below:
            </p>

            <ol className="text-auto list-disc px-5 md:px-10">
              <li>
                <span className="font-semibold">
                  To Honor Our Contractual Commitments to You.
                </span>{" "}
                Much of our processing of Personal Information is to meet our
                contractual obligations to our investors or to take steps at
                Users' request in anticipation of entering into a contract with
                them.
              </li>
              <li>
                {" "}
                <span className="font-semibold">
                  For Our Legitimate Interests.
                </span>{" "}
                In many cases, we handle Personal Information because it furthers
                our legitimate interests in commercial activities, such as the
                following, in ways that are not overridden by the interests or
                fundamental rights and freedoms of the affected individuals:
              </li>
              <ol className="px-5 list-disc">
                <li>Providing our Site and Service.</li>
                <li>
                  Detecting security incidents, protecting against malicious,
                  deceptive, fraudulent, or illegal activity, and prosecuting
                  those responsible for that activity.
                </li>
                <li>Measuring interest and engagement in our Services.</li>
                <li>
                  Short-term, transient use, such as contextual customization of
                  ads.
                </li>
                <li>Improving, upgrading, or enhancing our Services.</li>
                <li>Developing new products and services.</li>
                <li>Ensuring internal quality control and safety.</li>
                <li>Authenticating and verifying individual identities.</li>
                <li>
                  Debugging to identify and repair errors with our Services.
                </li>
                <li>
                  Auditing relating to interactions, transactions, and other
                  compliance activities.
                </li>
                <li>Enforcing our agreements and policies.</li>
                <li>Analyzing and improving our business.</li>
                <li>
                  Communications, including marketing and responding to your
                  inquiries about our services.
                </li>
                <li>
                  Addressing information security needs and protecting our Users,
                  Cakkie, and others..
                </li>
                <li>Managing legal issues.</li>
              </ol>
              <li>
                <span className="font-semibold">
                  To Comply with Legal Obligations.
                </span>{" "}
                We need to use and disclose Personal Information in certain ways
                to comply with our legal obligations.
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">DATA RETENTION</h4>
            <p className="text-auto">
              Unless you request that we delete certain information, we retain
              government-issued identification documents you submit to verify your
              identity for 40 days, selfies you submit to verify your identity for
              180 days, a copy of the headshot image from your identity document
              for 5 years, and other information we collect for at least 5 years.
              Your information may persist in copies made for backup and business
              continuity purposes for additional time. If you choose to provide us
              with Personal Information, we encourage you to routinely update the
              data to ensure that we have accurate and up-to-date information
              about you.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              INFORMATION SHARING AND DISCLOSURE
            </h4>
            <p className="italic">
              We may share information about you to provide the Services, for
              legal and investigative purposes, in connection with sweepstakes and
              promotions, or if we are part of a merger or acquisition. We may
              also share non-identifying information with third parties. You have
              choices as to whether we share your personal information with third
              parties for their marketing purposes.
            </p>
            <p className="text-auto">
              We may share aggregated Non-Identifying Information and we may
              otherwise disclose Non-Identifying Information (including, without
              limitation, Hashed Information) to third parties. We do not share
              your Personal Information with third parties for those third parties
              marketing purposes unless we first provide you with the opportunity
              to opt in to or opt out of such sharing. We may also share the
              information we have collected about you, including Personal
              Information, as disclosed at the time you provide your information,
              with your consent, as otherwise described in this Privacy Policy, or
              under the following circumstances:
            </p>

            <ol className="list-disc px-5 md:px-10 text-auto">
              <li>
                <span className="font-semibold">Service Providers: </span>We may
                employ third-party companies and individuals to facilitate our
                Service, to provide the Service on our behalf, to perform
                Service-related services (e.g., without limitation, maintenance
                services, database management, web analytics and online
                advertising, payment processing, fraud detection and improvement
                of Cakkie's features) or to assist us in analyzing how our Service
                is used. These third parties may have access to your Personal
                Information to perform these tasks on our behalf.
              </li>
              <li>
                <span className="font-semibold">
                  What Happens If You Agree to Receive Information from Third
                  Parties or Request That We Share Your Information:{" "}
                </span>
                You may be presented with an opportunity to receive information
                and/or marketing offers from one or more third parties. If you
                agree at that time to have your Personal Information shared, your
                Personal Information will be disclosed to that third party (or
                parties) and will be subject to the privacy policy and practices
                of that third party. We are not responsible for the privacy
                policies and practices of third parties, and, if you later decide
                that you no longer want to receive communications from a third
                party, you will need to contact that third party directly. You
                also may request, sometimes through your use of an SNS or similar
                interactive feature or third-party application, that we share
                information about you with a third party and we will typically do
                so under those circumstances.
              </li>
              <li>
                <span className="font-semibold">
                  Legal and Investigative Purposes:{" "}
                </span>
                Cakkie will share information with government agencies as required
                by law in response to lawful requests by public authorities,
                including to meet national security or law enforcement
                requirements and, without limitation, in connection with reporting
                earnings. We cooperate with government and law enforcement
                officials and private parties to enforce and comply with the law.
                We will disclose information about you to the government or law
                enforcement officials or private parties as we, in our sole
                discretion, believe necessary or appropriate to respond to claims
                and legal processes (including but not limited to subpoenas), or,
                at the request of governmental authorities or other third parties
                conducting an investigation where we determine in our sole
                discretion the disclosure is necessary to (a) protect the property
                and rights of Cakkie or a third party, (b) protect the safety of
                the public or any person, or (c) prevent or stop activity we may
                consider to be, or pose a risk of being, illegal, fraudulent,
                unethical or legally actionable activity.
              </li>
              <li>
                <span className="font-semibold">
                  Internal and Business Transfers:
                </span>{" "}
                Cakkie may share information, including Personal Information, with
                its parent company Vhytron Ltd, and any current or future
                subsidiaries or affiliates, primarily for business and operational
                purposes, including activities such as IT management, for them to
                provide services to you, or support and supplement the Services we
                provide. We may sell, transfer, or otherwise share some or all of
                our assets, including your Personal Information, in connection
                with a merger, acquisition, reorganization, or sale of assets
                (including, in each case, as part of the due-diligence process
                with any potential acquiring entity) or in the event of
                bankruptcy.
              </li>
              <li>
                <span className="font-semibold">
                  Sweepstakes, Contests, and Promotions:
                </span>{" "}
                We may offer sweepstakes, contests, and other promotions (any,
                “Promotion”) that may require registration. By participating in a
                Promotion, you are agreeing to the official rules that govern that
                Promotion, which may contain specific requirements of you,
                including, except where prohibited by law, allowing the sponsor(s)
                of the Promotion to use your name, voice, likeness, or other
                indicia of persona in advertising or marketing associated with the
                Promotion. If you choose to enter a Promotion, your Personal
                Information may be disclosed to third parties or the public in
                connection with the administration of such Promotion, including,
                without limitation, in connection with winner selection, prize
                fulfillment, and as required by law or permitted by the
                Promotion’s official rules, such as on a winner’s list.
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              THIRD-PARTY ANALYTICS PROVIDERS, AD SERVERS, AND SIMILAR THIRD
              PARTIES
            </h4>
            <p className="italic text-auto">
              We may work with advertising agencies and vendors who use technology
              to help us understand how people use our Site. These vendors may use
              technologies to serve you advertisements that may interest you. You
              can choose to opt-out of receiving interest-based advertising.
            </p>
            <p className="text-auto">
              Cakkie works with (or may in the future work with) network
              advertisers, ad agencies, analytics service providers, and other
              vendors to provide us with information regarding traffic on the
              Service, including pages, viewed and the actions are taken when
              visiting the Service; to serve our advertisements on other websites,
              within mobile apps and elsewhere online; and to provide us with
              information regarding the use of the Service and the effectiveness
              of our advertisements. Our service providers may collect certain
              information about your visits to and activity on the Service as well
              as other websites or services, they may set and access their
              tracking technologies on your device (including cookies and web
              beacons ) and may use that information to show you targeted
              advertisements. Some of these parties may collect Personal
              Information when you visit the Service or other online websites and
              services. We may also share certain Non-Identifying Information with
              these parties, including Hashed Information, in connection with the
              services they provide to us. If you choose to opt-out, please note
              you will continue to receive generic ads.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">YOUR CHOICES AND RIGHTS</h4>
            <p className="italic">
              According to applicable law, you may have certain choices and rights
              associated with your personal information.
            </p>
            <p className="font-semibold text-xl">Communication Preferences</p>
            <ul className="list-disc px-5 md:px-10 text-auto">
              <li>
                Registered Cakkie Users may update their choices regarding the
                types of communications they receive from us through their online
                accounts.
              </li>
              <li>
                You may opt out of receiving marketing emails from us by following
                the opt-out instructions provided in those emails. Please note
                that we reserve the right to send you certain communications
                relating to your account or use of the Service (for example,
                administrative and service announcements) via email and other
                means and these transactional account messages may be unaffected
                if you opt-out of receiving marketing communications.
              </li>
              <li>
                Registered Cakkie Users who access the Service by using a Cakkie
                mobile application may, with permission, receive push
                notifications. Similarly, registered Cakkie Users who access the
                Service by using certain desktop browsers may, with permission,
                receive push notifications. Notification preferences can be
                modified in the settings menu for the mobile application or the
                applicable browser.
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">Data Subject Rights.</h4>
            <p className="">Under applicable law, you may have the right to:</p>

            <ul className="list-disc px-5 md:px-10 text-auto">
              <li>
                <span className="font-semibold">Access Personal Information</span>{" "}
                about you, including (i) confirming whether we are processing your
                personal information; (ii) obtaining access to or a copy of your
                personal information.
              </li>
              <li>
                <span className="font-semibold">Request Correction</span> of your
                personal information where it is inaccurate, incomplete, or
                outdated. In some cases, you can update your personal information
                within your Cakkie account by logging in and visiting
                settings/user settings.
              </li>
              <li>
                <span className="font-semibold">
                  Request Deletion, Anonymization, or Blocking{" "}
                </span>
                of your personal information when processing is based on your
                consent or when processing is unnecessary, excessive, or
                non-compliant. Note that if your information is deleted, then your
                account may become deactivated. If your account is deactivated or
                you ask to close your account, you will no longer be able to use
                the Service. If you would like to close your account in our
                system, you can do so through the Cakkie Service (once you have
                logged in, visit settings/user settings, and then click on close
                my account.
              </li>
              <li>
                <span className="font-semibold">
                  Request Restriction of or Object
                </span>{" "}
                to our processing of your personal information when processing is
                non-compliant.
              </li>
              <li>
                <span className="font-semibold">Withdraw your Consent</span> to
                our processing of your personal information. If you refrain from
                providing personal information or withdraw your consent to the
                processing, some features of our Service may not be available.
              </li>
              <li>
                <span className="font-semibold">Request data portability </span>
                and receive an electronic copy of the personal information that
                you have provided to us.
              </li>
              <li>
                <span className="font-semibold">Be informed</span> about third
                parties with which your personal information has been shared.
              </li>
              <li>
                <span className="font-semibold">
                  Request the review of decisions
                </span>{" "}
                taken exclusively based on automated processing if that could
                affect data subject rights.
              </li>
            </ul>
            <p className="text-auto">
              We will use commercially reasonable efforts to honor your deletion
              requests; however, certain information will actively persist on the
              Service even if you close your account, including information in
              your Work Diaries and messages you posted to the Service. In
              addition, the rights described above may be limited, for example, if
              fulfilling your request would reveal personal information about
              another person, or if you ask us to delete the information we are
              required by law to keep or have compelling legitimate interests in
              keeping (such as for fraud prevention purposes). Your Personal
              Information may remain in our archives and information you update or
              delete, or information within a closed account may persist
              internally for our administrative purposes, to the extent permitted
              by law. In addition, we typically will not remove information you
              posted publicly through or on the Service. Bear in mind that neither
              you nor Cakkie can delete all copies of information that has been
              previously shared with others on the Service.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">SECURITY</h4>
            <p className="text-auto italic">
              We take some steps to protect your data, but no security is
              guaranteed.
            </p>
            <p className="text-auto">
              Cakkie takes commercially reasonable steps to help protect and
              secure the information it collects and stores about Cakkie Users.
              All-access to the Site is encrypted using industry-standard
              transport layer security technology (“TLS”). When you enter
              sensitive information (such as tax identification number), we
              encrypt the transmission of that information using secure socket
              layer technology (“SSL”). We also use HTTP strict transport security
              to add a layer of protection for our Cakkie Users. But remember that
              no method of transmission over the Internet, or method of electronic
              storage, is 100% secure. Thus, while we strive to protect your
              Personal Information, Cakkie cannot ensure and does not warrant the
              security of any information you transmit to us.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">LINKS TO OTHER SITES</h4>
            <p className="text-auto">
              Our Service contains links to other websites. If you choose to click
              on a third-party link, you will be directed to that party's website.
              The fact that we provide link to a website is not an endorsement,
              authorization, or representation of our affiliation with that third
              party, nor is it an endorsement of their privacy or information
              security policies or practices. We do not exercise control over
              third-party websites. These other websites may place their cookies
              or other files on your computer, collect data or solicit Personal
              Information from you. We encourage you to read the privacy policies
              or statements of the other websites you visit.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">PUBLIC PROFILE</h4>
            <p className="text-auto">
              The profile you create on our Site will be publicly accessible
              unless otherwise indicated. This means it will be visible to the
              entire Internet, including clients, freelancers, visitors, and
              search engines such as Google and Bing, and may appear on Cakkie
              partners' sites. You may change the privacy settings of your profile
              through your account portal.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">PHISHING</h4>
            <p className="text-auto">
              Phishing websites imitate legitimate websites to obtain personal or
              financial information. Identity theft and the practice currently
              known as “phishing” are of great concern to Cakkie. For more
              information about phishing, visit the website of the Federal Trade
              Commission at http://www.consumer.ftc.gov/articles/0003-phishing. In
              addition, if you believe you have received an email or had a similar
              interaction with a third party pretending to be Cakkie, please
              report it at cakkie.team@gmail.com.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">CHANGES TO THIS POLICY</h4>
            <p className="italic text-auto">
              We may change this Privacy Policy. If we make substantial changes,
              we will provide notice.
            </p>
            <p className="text-auto">
              Cakkie may update this Privacy Policy at any time and any changes
              will be effective upon posting. If there are substantial changes to
              the way we treat your Personal Information, we will display a notice
              through the Services before the change becomes effective. We may
              also notify you by email, at our discretion. However, we will use
              your Personal Information in a manner consistent with the Privacy
              Policy in effect at the time you submitted the information unless
              you consent to the new or revised policy.
            </p>
            <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
              <h4 className="text-xl font-semibold">CONTACTING US</h4>
              <p className="text-auto">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <span className="text-bold">support@cakkie.com</span>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    
  );
}
