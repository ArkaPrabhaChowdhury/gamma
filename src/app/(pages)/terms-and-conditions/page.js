import React from 'react';
import Bottom from '../../(components)/Bottom';
import Navbar from '../../(components)/Navbar';

const TermsAndConditions = () => {
  return (
    <div className="bg-white">
      <Navbar policy={true}/>
      <div className="max-w-7xl mx-auto p-4 text-gray-700">
        <h1 className="text-3xl font-bold mb-8 mt-8 text-center">Terms of Service Agreement</h1>
        <p className="mb-4">
          PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.
        </p>

        <p className="mb-4">
          This Terms of Service Agreement (the "Agreement") governs your use of this website, Gammainnovations.com (the "Website"), Gamma Tech & Services LLP ("Business Name") offer of products for purchase on this Website, or your purchase of products available on this Website. This Agreement includes, and incorporates by this reference, the policies and guidelines referenced below. Gamma Tech & Services LLP reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website. Gamma Tech & Services LLP will alert you that changes or revisions have been made by indicating on the top of this Agreement the date it was last revised. The changed or revised Agreement will be effective immediately after it is posted on this Website. Your use of the Website following the posting of any such changes or of a revised Agreement will constitute your acceptance of any such changes or revisions. Gamma Tech & Services LLP encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with Gamma Tech & Services LLP for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website. If you would like to print this Agreement, please click the print button on your browser toolbar.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <p className="mb-4">Terms of Offer. This Website offers for sale certain products (the "Products"). By placing an order for Products through this Website, you agree to the terms set forth in this Agreement.</p>

        <p className="mb-4">
          Customer Solicitation: Unless you notify our third-party call center reps or direct Gammainnovations sales reps, while they are calling you, of your desire to opt out from further direct company communications and solicitations, you are agreeing to continue to receive further emails and call solicitations Gammainnovations and its designated in-house or third-party call team(s).
        </p>

        <p className="mb-4">
          Opt Out Procedure: We provide 3 easy ways to opt out from future solicitations.
          <br />
          1. You may use the opt-out link found in any email solicitation that you may receive.
          <br />
          2. You may also choose to opt out, via sending your email address to: Gammainnovations@gmail.com
        </p>

        <p className="mb-4">
          Proprietary Rights. Gamma Tech & Services LLP has proprietary rights and trade secrets in the Products. You may not copy, reproduce, resell or redistribute any Product manufactured and/or distributed by Gamma Tech & Services LLP. Gamma Tech & Services LLP also has rights to all trademarks and trade dress and specific layouts of this webpage, including calls to action, text placement, images, and other information.
        </p>

        <p className="mb-4">
          Sales Tax. If you purchase any Products, you will be responsible for paying any applicable sales tax.
        </p>

      </div>
      <Bottom />
    </div>
  );
};

export default TermsAndConditions;
