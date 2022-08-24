import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6">
      <p className="text-slate-500 text-sm">
        Copyright &copy; {new Date().getFullYear()} Mohammad Hadi
      </p>
    </footer>
  );
};

export default Footer;
