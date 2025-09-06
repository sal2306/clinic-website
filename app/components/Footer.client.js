
'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div style={{maxWidth:420}}>
            <div className="footer-logo"><img src="/images/logo.png" alt="logo" width="36" height="36" style={{borderRadius:6}}/> <span>Dr G Ali Clinic</span></div>
            <p className="muted-sm" style={{marginTop:8}}>Compassionate homeopathic care — family oriented, evidence aware and community focused.</p>
            <p className="muted-sm" style={{marginTop:12}}>© {new Date().getFullYear()} Dr G Ali Clinic</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul style={{listStyle:'none', padding:0}}>
              <li><Link href="/doctors">Our Doctors</Link></li>
              <li><Link href="/vision">Our Legacy & Vision</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <address style={{fontStyle:'normal'}}>
              123 Clinic Road<br/>City, State<br/>Phone: +91-6422359047
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
