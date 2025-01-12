import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Russ A Buss</h3>
            <p className="text-sm">Your audio deserves the best treatment</p>
            <p className="text-sm mt-2">Tip Russ in ₿itcoin: 33KK4NduUZLJHsNXV5KWbgpvfzSvcLGgoK</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <Phone className="h-4 w-4" />
              <span>(503) 734-5502</span>
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <Mail className="h-4 w-4" />
              <span>audio@russabuss.com</span>
            </div>
            <p className="text-sm">russabuss.eth | russabuss.sol</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20 text-sm text-center flex justify-between items-center">
          <Image src="/linktree-qr.png" alt="LinkTree QR Code" width={60} height={60} />
          <span>© {new Date().getFullYear()} Russ A Buss. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;