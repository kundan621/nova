import React from 'react';
import image from '../../public/logo.png'
function App() {
  return (
    <div className="App">
      <main className="p-4">
        <section className="mb-4">
          <h2 className="text-3xl font-semibold">Who we are</h2>
          <p className="text-lg">We are a team of passionate software engineers who love to solve problems and create innovative solutions. We have expertise in various domains such as web development, mobile development, cloud computing, artificial intelligence, and more.</p>
        </section> 
        <section className="mb-4">
          <h2 className="text-3xl font-semibold">What we do</h2>
          <p className="text-lg">We provide consulting and service for clients who need help with their software projects. We can assist with any stage of the software development lifecycle, from planning and design, to implementation and testing, to deployment and maintenance. We can also provide training and support for your team.</p>
        </section>
        <section className="mb-4">
          <h2 className="text-3xl font-semibold">Why choose us</h2>
          <p className="text-lg">We are committed to delivering high-quality software that meets your requirements and exceeds your expectations. We are flexible and adaptable to your needs and preferences. We are reliable and trustworthy, and we value your satisfaction and feedback.</p>
        </section>
        <section className="mb-4">
          <h2 className="text-3xl font-semibold">How to contact us</h2>
          <p className="text-lg">If you are interested in working with us, or if you have any questions or comments, please feel free to contact us by email, phone, or social media. We would love to hear from you and discuss how we can help you with your software needs.</p>
          <ul className="list-disc list-inside text-lg">
            <li>Email: kundan621@gmail.com</li>
            <li>Phone: +91-9748211555</li>
            <li>Facebook: @kundan621</li>
            <li>Twitter: @kundan621</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
