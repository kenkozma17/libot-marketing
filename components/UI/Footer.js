import NormalWrapper from "./NormalWrapper";
export default function Footer() {
  return (
    <footer className="bg-libot-black text-libot-lavender md:py-10 py-4">
      <NormalWrapper>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between space-y-4">
          <div className="col-span-1 md:text-left text-center">
            <p>Libot - Based in the Philippines</p>
          </div>
          <div className="col-span-1 md:text-right text-center">
            <p className="font-semibold">Features</p>
            <ul className="text-sm">
              <li>Direct Booking Webpage</li>
              <li>Admin dashboard</li>
              <li>Daily maintenance</li>
              <li>Capture online payments</li>
              <li>Customer support</li>
              <li>Cancel Anytime</li>
              <li>Enhanced SEO</li>
              <li>Analytics and Reports</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p className="md:text-left text-center text-xs text-opacity-75">
            © 2023 Libot. All Rights Reserved
          </p>
        </div>
      </NormalWrapper>
    </footer>
  );
}
