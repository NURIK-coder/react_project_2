import React, { useState } from 'react';

function Footer() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Comment: ${comment}`);
  };

  return (
    <footer className="footer">
      <a href="">Phone number: <p>+998 91 234 56 78</p>
      </a><a href="">Email: <p>john_doe123@gmail.com</p>
      </a><a href="">Social media: <p>@john_doe</p></a>
    </footer>
  );
}

export default Footer;