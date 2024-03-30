import React from 'react';
import { TopNav } from '@/components/landing/_components';
import { Footer } from '@/components/footer/Footer';

export default function DeleteAccountPage() {
  return (
    <div className="flex w-full flex-col items-center min-h-screen">
      <TopNav />
      <section className="flex max-w-[1600px] flex-col gap-4 text-cakkie items-center  mx-auto py-6 px-4 sm:px-10 md:px-20 sm:py-10 flex-grow">
      <div className="flex flex-col justify-start items-start gap-4 text-cakkie">
          <h3 className="text-3xl font-bold">Delete Your Account</h3>
          <h4 className="text-xl font-semibold">
            We understand that circumstances may change, and you may no longer wish to continue using our platform. If you've decided to delete your account, we've made the process simple and straightforward. Just follow the steps below:
          </h4>
          <p className="text-auto">
            <strong>Open the App:</strong> Launch the app on your device and log in to your account using your credentials.
          </p>
          <p className="text-auto">
            <strong>Access Your Profile:</strong> Once logged in, navigate to your profile by tapping on your profile icon or username. This will take you to your profile page where you can view your account information.
          </p>
          <p className="text-auto">
            <strong>Navigate to Settings:</strong> Look for the "Settings" option within your profile. This may be represented by a gear icon or labeled as "Settings" directly. Tap on this option to access your account settings.
          </p>
          <p className="text-auto">
            <strong>Go to Security:</strong> Within the Settings menu, locate and tap on the "Security" option. This will take you to the security settings section of the app.
          </p>
          <p className="text-auto">
            <strong>Delete Account:</strong> In the Security settings, you should find an option labeled "Delete Account" or something similar. Tap on this option to proceed with deleting your account.
          </p>
          <p className="text-auto">
            <strong>Confirmation:</strong> After selecting the "Delete Account" option, you may be asked to confirm your decision. This is to ensure that you're certain about deleting your account, as this action cannot be undone.
          </p>
          <p className="text-auto">
            <strong>Provide Feedback (Optional):</strong> Some apps may prompt you to provide feedback or reasons for deleting your account. You can choose to provide feedback or skip this step.
          </p>
          <p className="text-auto">
            <strong>Final Confirmation:</strong> Once you've confirmed your decision to delete your account, the app will process your request. You may receive a final confirmation message indicating that your account has been successfully deleted.
          </p>
          <p className="text-auto">
            <strong>Account Deactivation:</strong> When an account is deleted, we do not delete it immediately until after 30 days. We deactivate the account instead with all the user data intact. During these 30 days, if you log back into your account, the deletion will be cancelled, and your account won't be deleted again except if you delete it again.
          </p>
          <p className="text-auto">
            <strong>Permanent Deletion:</strong> After 30 days, we delete your account permanently. This means that all your information and everything you own on Cakkie will be gone. Some data such as comments, reviews, orders, proposals and messages you sent to people might still remain but won't be tied to any personal identifiers.
          </p>
          <p className="text-auto">
            <strong>Shop Deletion:</strong> Your shop will be deleted 30 days after your account has been deleted permanently.
          </p>
          <p className="text-auto">
            That's it! Your account has now been deleted from our platform. If you ever decide to return, you're always welcome to create a new account. If you have any questions or encounter any issues during the account deletion process, feel free to reach out to our support team for assistance. Thank you for being a part of our community.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
