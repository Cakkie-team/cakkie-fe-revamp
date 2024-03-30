import { TopNav } from "@/components/landing/_components";
import { Footer } from "@/components/footer/Footer";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:w-[1600px] self-center">
        <TopNav />
        <section className="flex flex-col gap-4 text-cakkie items-center justify-center w-full mx-auto py-6 px-4 sm:px-10 md:px-20 sm:py-10">
          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h3 className="text-3xl font-bold">Terms of service</h3>

            <h4 className="text-xl font-semibold">
              This document describes the rules that govern our marketplace.
            </h4>
            <p className="text-auto">
              These are our Terms of Service. They apply to cakkie.com as well as
              all of the websites and apps we own or operate. (By "we," we mean
              Cakkie and our affiliates, who may also be referred to as "us.")
              These terms describe how we expect you to behave when using Cakkie,
              regardless of whether you are a registered user or an unregistered
              site visitor on our site.{" "}
              <span className="text-semibold">
                Please read these rules thoroughly: by using our site, you agree
                to abide by them.
              </span>
            </p>
            <p className="text-auto">
              Each section has a summary (in italics throughout). We wrote these
              to give you a quick overview, but you'll need to read all of the
              sections to get all of the details.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1. About licenses and third-party content
            </h4>
            <p className="text-auto">
              We've included the terms and conditions for using our website and
              app, which we work hard to keep running smoothly (1a). That means we
              have the authority to prevent people from using our website, app,
              and services if necessary (1b).
            </p>
            <p className="text-auto">
              You are not permitted to use our intellectual property (1c), but you
              are permitted to post your content to Cakkie. You are responsible
              for this content (1d), and we are not responsible for any content
              you encounter from other users (1e). If you believe someone is using
              something you've copyrighted, please notify us (1f).
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1a. We allow you to use our website, app, and services.
            </h4>
            <p className="italic">
              We are technically providing you with a ' limited license ' to the
              site and app. This is what it means.
            </p>
            <p className="text-auto">
              We welcome you to use our website, app, and services (known as the
              services). You may have this access (or limited license) as long as
              you comply with these terms of use and all of our other Terms of
              Service that apply to you.
            </p>
            <p className="text-auto">
              We will do our best to ensure that our services are safe and
              functional, but we cannot guarantee that you will have continuous
              access. We may even discontinue providing certain features or
              services entirely, and we are under no obligation to do so.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1b. We have the authority to refuse you access to our services.
            </h4>
            <p className="italic">
              We reserve the right to revoke your right to use our services at any
              time.
            </p>
            <p className="text-auto">
              We may terminate your access to Cakkie if you violate our Terms of
              Use or other parts of our Terms of Service. This is known as
              terminating your license, and if it occurs, we will notify you and
              you must immediately cease using our services.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1c. We retain ownership of our intellectual property.
            </h4>
            <p className="italic">
              Using our services does not permit you to use any of our trademarks
              or intellectual property, such as copyrights and patents. Even
              though we allow you to use our services, we retain all of our
              intellectual property rights.
            </p>
            <p className="text-auto">
              Our logos and names are registered trademarks in certain
              jurisdictions. Any other product or company names, logos, or similar
              marks and symbols you see on Cakkie may be trademarked by our
              partners or other Cakkie users.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1d. Cakkie allows you to share your content with the world.
            </h4>
            <h4 className="text-xl font-semibold italic">
              1d.i. You're accountable for the content you post.
            </h4>
            <p className="text-auto">
              You are accountable for how you use our website and what you post
              there. You consent to reimburse us for our legal fees and costs if a
              claim is brought against us due to something you posted on the
              website (the lawyers refer to this as "indemnification").
            </p>
            <p className="text-auto">
              You acknowledge that we are not responsible in any way for any
              content you submit for posting on (or through) our website or that
              you submit to us for posting. You also agree to only post or give us
              content that:
            </p>

            <ol className="text-auto list-disc px-4 md:px-10">
              <li>you have the right to post</li>
              <li>is legal</li>
              <li>
                doesn’t violate anyone’s rights, including intellectual property
                rights.
              </li>
            </ol>

            <p className="text-auto">
              You acknowledge and agree that Cakkie is not liable for any harm
              caused by content posted by others and that you will pay damages to
              and defend Cakkie, our partners, staff members, and representatives
              in any legal proceedings or government actions we may face as a
              result of your content.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1d.ii. Others have rights to what you post.
            </h4>
            <p className="italic">
              You grant others rights to your content by posting it on the site.
            </p>
            <p className="text-auto">
              When you post content on our site, you grant us and our affiliates a
              perpetual right (referred to as an "irrevocable and non-exclusive
              worldwide license") to use, edit, and share that content anywhere in
              the world without payment of royalties. If your name, voice, and
              image appear in the content you post, we also might use those on the
              site or in our day-to-day business. For example, if you’re a
              freelancer, we might share your profile with clients we think could
              be a good match.
            </p>
            <p className="text-auto">
              You also give each user and site visitor the right to access and use
              your content through the site. They also have the right to use, copy
              and share your content – as long as they do it through the site, and
              follow both our Terms of Service and the law.
            </p>
            <p className="text-auto">
              We might show ads near your content and information, without
              compensating you. Depending on the choices you make in your profile,
              we might also include your name or photo when promoting one of our
              features.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold italic">
              1d.iii. We welcome your suggestions.
            </h4>
            <p className="italic">
              We would love to hear your suggestions on how to improve Cakkie. Here’s
              what happens when you share them.
            </p>
            <p className="text-auto">
              You can send us feedback and suggestions on how to improve our
              services. If you do, you agree that your ideas are gratuitous and
              unsolicited and that you do not expect or demand anything in return,
              unless we have specifically asked for your ideas and offered
              something in return (we like to keep our word).
            </p>
            <p className="text-auto">
              You agree that we are free to use, change, and share the idea as we
              see fit, without being obligated to compensate you in any way. And,
              if you do send us an idea, you agree that this does not limit our
              ability to use similar or related ideas, including those we already
              have or obtain from others.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1e. Third parties also post on Cakkie.
            </h4>
            <p className="italic">
              Anyone else who uses our site is responsible for what they post or
              link on Cakkie.
            </p>
            <p className="text-auto">
              We’re not responsible for the accuracy or reliability of any content
              shared by other people on our site unless they’re officially working
              for us when they share or post the content. Any content represents
              the views of the person sharing it, not Cakkie.
            </p>
            <p className="text-auto">
              Our site might also contain links or other access to third-party
              websites and applications. These sites and applications are owned
              and run by other parties, not Cakkie. If we use a link or
              application that goes to a third-party website, it doesn’t mean that
              we endorse it and you agree that you use it without our endorsement.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              1f. You can make a copyright complaint
            </h4>
            <p className="italic">
              If you think the content on our site infringes your rights, you can
              ask to have it removed.
            </p>
            <p className="text-auto">
              We’re committed to following Nigerian copyright and related laws and
              need site visitors and users to follow them as well. That means you
              can’t use our site to store or share anything that infringes on
              anyone’s intellectual property rights, including their rights under
              Nigerian copyright law.
            </p>
            <p className="text-auto">
              If you own copyrighted work and think your rights under Nigerian
              copyright law have been infringed by anything on our site, you can
              ask us to take it down by sending us a detailed email.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              2. What you’re allowed to do on Cakkie
            </h4>
            <p className="italic">
              You can only use our services for work, purchase, sales, delivery
              and to learn from the information we share.
            </p>
            <p className="text-auto">
              Our website and services are intended for use by businesses,
              individuals, and consumers. We operate our marketplace to assist
              users in finding each other, forming working relationships, selling,
              buying, delivering, making, and receiving payments for their work.
            </p>
            <p className="text-auto">
              You can also use some of our services, such as our Cakkie blog, to
              obtain information that we believe will be interesting and useful to
              our site visitors and users. While we make every effort to ensure
              that this information is up-to-date and accurate, errors may occur.
              We make no guarantees about the information on our website, so never
              use it as tax or legal advice. You should also always double-check
              the information.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              3. What you’re not allowed to do on Cakkie
            </h4>
            <p className="italic">
              Some uses of the website are prohibited. Here, we discuss those
              topics in much more detail, covering:
            </p>

            <ol className="italic text-auto list-disc px-4 md:px-10">
              <li>posting unacceptable content (3a)</li>
              <li>acting misleadingly or fraudulently (3b)</li>
              <li>treating others unfairly (3c)</li>
              <li>abusing our feedback system (3d)</li>
              <li>other uses that aren’t allowed (3e)</li>
            </ol>

            <p className="text-auto">
              In short, you're not allowed to use our services to do (or encourage
              others to do) anything illegal, fraudulent or harmful. If you don't
              see something on one of the lists below, you shouldn't assume it's
              allowed. If you are unsure, please contact us.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              3a. Posting unacceptable content
            </h4>
            <p className="text-auto">
              You can’t offer, share, support or try to find anything that:
            </p>

            <ol className="text-auto list-disc px-4 md:px-10">
              <li>is illegal or defamatory</li>
              <li>
                is violent, discriminatory, or harassing, either generally or
                towards a specific person or group (or encourages others to be),
                including anyone who is part of a legally protected group
              </li>
              <li>
                is sexually explicit or related to sex work or escort services
              </li>
              <li>is in any way related to child exploitation</li>
              <li>
                would infringe on any intellectual property rights, including
                copyrights
              </li>
              <li>
                would violate our Terms of Service, another website’s terms of
                service, or any similar contract
              </li>
              <li>
                would go against professional or academic standards or policies –
                including improperly submitting someone else’s work as your own,
                or by ghost-writing essays, tests, or certifications
              </li>
              <li>
                involves purchasing or requesting a fake review or is connected in
                any way to making or sharing misleading content (like ‘deep fakes’
                or ‘fake news’) which is intended to deceive others.
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              3b. Acting in a misleading or fraudulent way
            </h4>
            <p className="italic">
              On Cakkie, you can’t do anything dishonest or meant to fool others.
            </p>
            <p className="text-auto">
              You can’t misrepresent yourself, your experience, skills,
              professional qualifications, or that of others. This includes:
            </p>

            <ol className="text-auto list-disc px-4 md:px-10">
              <li>
              lying about your experience, skills, or professional
                qualifications
              </li>
              <li>
                passing off any part of someone else’s profile or identity as your
                own
              </li>
              <li>
                using a profile picture that isn’t you, or misrepresenting your
                identity
              </li>
              <li>
                impersonating or falsely attributing statements to any person or
                entity, including a Cakkie representative or forum leader
              </li>
              <li>
                falsely claiming or implying you’re connected to a person or
                organization (including Cakkie) – for example, you can’t say you
                work for a particular company when you don’t, and agencies can’t
                use a freelancer’s profile if they’ve stopped working together.
              </li>
              <li>
                violating our Terms of Service, another website’s terms of
                service, or any similar contract
              </li>
              <li>
                going against professional or academic standards or policies –
                including improperly submitting someone else’s work as your own,
                or by ghost-writing essays, tests, or certifications
              </li>
              <li>
                purchasing or requesting a fake review that is connected in
                any way to making or sharing misleading content (like ‘deep fakes’
                or ‘fake news’) which is intended to deceive others.
              </li>
            </ol>

            <p className="text-auto">
              Similarly, you must always be honest about who’s doing the work.
              That means you can’t:
            </p>

            <ol className="text-auto list-disc px-4 md:px-10">
              <li>
                lie about your experience, skills, or professional
                qualifications
              </li>
              <li>
                falsely claim one freelancer will do a job when another will do it
                – including submitting a proposal on behalf of a freelancer who
                can’t or won’t do the work.
              </li>
            </ol>

            <p className="text-auto">
              We’re particularly invested in avoiding fraud and misrepresentations
              when it comes to payments. This means:
            </p>
            <p className="text-auto">
              i. Freelancers can’t fraudulently charge a client in any way,
              including by:
            </p>
            <ol className="text-auto">
              <li>
                falsifying the hours, keystrokes,requirements, or clicks recorded
                in the Cakkie app
              </li>
              <li>reporting or billing time you haven’t worked</li>
              <li>
                reporting time worked by someone else and claiming you did the
                work
              </li>
              <li>
                demanding bribes or other payments without the intention of or
                without providing services in exchange for the payment.
              </li>
            </ol>

            <p className="text-auto">
              ii. Clients can’t engage in fraud related to payments, including by:
            </p>

            <ol className="text-auto list-disc px-4 md:px-10">
              <li>
                posting jobs with payment terms that are objectively unreasonable
                or disproportionate to the scope of services requested.
              </li>
              <li>
                demanding services without the intention of or without providing
                payment in exchange for the services
              </li>
            </ol>

            <p className="text-auto">
              iii. Delivery agents can’t engage in fraud related to payments,
              including by:
            </p>

            <ol className="text-auto list-disc px-4 md:px-10">
              <li>
                Asking for payment at item delivery from the clients or
                freelancers
              </li>
              <li>
                demanding bribes or other payments without the intention of or
                without providing services in exchange for the payment.
              </li>
              <li>
                falsifying the hours, keystrokes, or clicks recorded in the Cakkie
                app
              </li>
              <li>reporting or billing time you haven’t worked</li>
              <li>
                reporting time worked by someone else and claiming you did the
                work
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 w-full text-cakkie">
            <h4 className="text-xl font-semibold">
              3c. Treating others unfairly
            </h4>
            <p className="italic">
              Everyone should be treated fairly and legally on Cakkie.
            </p>
            <p className="text-auto">You can’t use Cakkie to:</p>

            <ol className="list-disc px-4 md:px-10 text-auto">
              <li>express an unlawful preference in a job post or proposal</li>
              <li>unlawfully discriminate against someone</li>
              <li>incite or encourage violence</li>
              <li>
                post personally identifying information or other sensitive,
                private data about another person
              </li>
              <li>
                spam other users with proposals or invites. This includes posting
                the same job several times at once and contacting people you
                connected with on Cakkie outside of Cakkie without their
                permission
              </li>
              <li>
                make or demand bribes or payments for anything other than the work
              </li>
              <li>
                ask for or demand free work – you can’t ask freelancers to submit
                work for little or no payment as part of a proposal bid or
                competition
              </li>
              <li>request a fee to submit a proposal</li>
              <li>
                request or provide services that primarily concern making
                purchases on behalf of another, including the purchase of
                cryptocurrency or NFTs.
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-start w-full items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              3d. Abusing our feedback system
            </h4>
            <p className="italic">
              You must utilize our feedback system fairly and honestly.
            </p>
            <p>Therefore, you cannot:</p>

            <ul className="list-disc px-4 md:px-10">
              <li>
                withhold payment or work until you’ve been given positive feedback
              </li>
              <li>
                swap payment (or anything of value) for feedback, including with
                third parties
              </li>
              <li>coerce another user by threatening negative feedback</li>
              <li>
                use the system to share unrelated views (like about politics or
                religion)
              </li>
              <li>
                offer or accept fake services to improve your feedback or rating
                score, which is called feedback building
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              3e. Other uses that aren’t allowed
            </h4>
            <p className="italic">
              Cakkie relies on technology and trust – here’s how we maintain those
              things:
            </p>
            <ul className="list-disc px-4 md:px-10 text-auto">
              <li>
                <span className="font-semibold">
                  You can’t copy, share or give away your account.
                </span>{" "}
                You can’t have multiple accounts and you can’t sell, trade, or
                give your account to anyone else without our permission.
              </li>
              <li>
                <span className="font-semibold">You can’t go around us.</span> In
                particular, you can’t talk to another user or ask for or share a
                way to get in touch - a means of direct contact - outside of
                Cakkie before you’ve agreed to a service contract. This means you
                can’t add your contact details to a job post, your profile,
                communications, or other content. (There are exceptions to this
                for Enterprise clients.)
              </li>
              <li>
                <span className="font-semibold">
                  You can’t promote other organizations
                </span>{" "}
                – including advertising any other websites, products, or services.
                You also can’t use our site to recruit freelancers or clients to
                join another agency, website, or company, unless you pay us a fee
                to do so. For more information, take a look at Section 7 of our
                User Agreement.
              </li>
              <li>
                <span className="font-semibold">
                  You can’t interfere with our technology or tamper with our site
                  or services.
                </span>{" "}
                That means you can’t:
              </li>
              <ol className="list-disc px-4 md:md:px-6 text-auto">
                <li>
                  bypass any security features we’ve put in place to restrict how
                  you use the site – you’re not allowed to try and get around
                  restrictions on copying content
                </li>
                <li>
                  use a robot, spider, scraper, or similar mechanisms on our site
                  without written permission
                </li>
                <li>
                  interfere with or compromise our systems, server security, or
                  transmissions
                </li>
                <li>
                  copy, distribute, or otherwise use any information you found on
                  Cakkie, whether directly or through third parties (like search
                  engines), without our consent (no scraping allowed)
                </li>
                <li>
                  col justify-start items-startlect or use identifiable
                  information, including account names)
                </li>
                <li>
                  overwhelm the site with an unreasonable or large amount of
                  information
                </li>
                <li>
                  introduce any malware or any other code or viruses that could
                  harm us, our customers, or our services
                </li>
                <li>
                  access our services through any technology other than our
                  interface
                </li>
                <li>
                  frame or link to the services without our written permission
                </li>
                <li>
                  reverse engineer, decipher, modify, or take source code from our
                  site that is not open source without our written permission.
                </li>
                <li>
                  use our services to build a similar service, identify or poach
                  our users or publish any performance or benchmark analysis
                  relating to the site
                </li>
              </ol>
            </ul>
            <p></p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">
              4. Enforcing our terms of use
            </h4>
            <p className="italic">
              If you break any of these rules, we can suspend your account and
              stop you from using Cakkie (3a). If you see someone else breaking
              these rules, please let us know (3b).
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">4a. We enforce these rules</h4>
            <p className="text-auto">
              We have the right to look into any potential violations of these
              terms of use and might decide to pause, change or take away any
              content on our site when we do.
            </p>
            <p className="text-auto">
              We can’t guarantee that we’ll take action against every potential
              violation, but just because we don’t take action against one breach
              doesn’t waive our right to take action against any future breaches,
              whether they’re related to the first breach or not.
            </p>
            <p className="text-auto">
              If we do suspect rule-breaking, we can stop you from using our site
              at any time. If we disable or close your account, you won’t be able
              to use any of our services, but these things will stay in place:
            </p>
            <ul className="list-disc px-4 md:px-10 text-auto">
              <li>our rights to use and share your feedback</li>
              <li>
                our users’ and visitors' rights to share your content (1d.ii)
              </li>
              <li>
                your agreement to all the rules laid out in section 3 on this
                page.
              </li>
            </ul>

            <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
              <h4 className="text-xl font-semibold">
                4b. Tell us if you see someone breaking these rules
              </h4>
              <p className="italic">
                What to do if you become aware of a violation of our Terms of Use.
              </p>
              <p className="text-auto">
                If you believe anyone is breaking any of our terms of use, please
                let our customer service team know.
              </p>
              <p className="text-auto">
                If we follow up on the breach, you agree to help with our
                investigation and take reasonable steps to help us fix the
                problem.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
            <h4 className="text-xl font-semibold">5. Definitions</h4>
            <p className="italic">
              Here, we explain some of the terms we’ve used in our Terms of Use.
              Any other terms in italics should be defined when they’re mentioned,
              in the User Agreement or Terms of Service.
            </p>
            <p className="text-auto">
              An <span className="semibold">affiliate</span> is anyone or anything
              that in any way manages, is managed by, or shares management with
              us.
            </p>

            <p className="text-auto">
              A <span className="semibold">client</span> is someone using our site
              to find freelancer services from another user.
            </p>
            <p className="text-auto">
              A <span className="semibold">deep fake</span> is a video or image
              that has been changed to replace one person with another in a
              deliberately misleading way, without asking the person whose face
              has been used.
            </p>
            <p className="text-auto">
              A <span className="semibold">freelancer</span> is an individual or
              agency using our site to offer their services to clients.
            </p>
            <p className="text-auto">
              <span className="semibold">Freelancer services</span> refer to the
              work freelancers do on Upwork.
            </p>
            <p className="text-auto">
              A <span className="semibold">means of direct contact</span> is
              information that would let someone get in touch with you directly
              (or find the information to do that) so you can bypass our site. For
              example, phone numbers, email and physical addresses, social media
              accounts, and personal websites with contact information are means
              of direct contact.
            </p>
            <p className="text-auto">
              <span className="semibold">Site services</span> are all services,
              applications, and products – apart from freelancer services – that
              people can access through Upwork.
            </p>
            <p className="text-auto">
              <span className="semibold">Content</span> is what users post to
              Upwork themselves, like comments, profiles, feedback, images, or
              other information. It includes anything posted as a response to
              questions asked by other users or Upwork.
            </p>
            <p className="text-auto">
              A <span className="semibold">delivery agent </span>is an individual
              using our site to deliver items to the users
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};
