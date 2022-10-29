import React from 'react';
import "./style.css";

const Services = () => {
  return (
    // Services section starts 
    <section className="section services-section" id="services-section">
        <div className="container">
            <div className="row heading">
                <h1 className="heading services-heading" data-title="What we provide">Services</h1>
            </div>
            <div className="row services-content">
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                    <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                    <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                    <line x1="11" y1="6" x2="20" y2="6" />
                    <line x1="11" y1="12" x2="20" y2="12" />
                    <line x1="11" y1="18" x2="20" y2="18" />
                  </svg>Facility Audits</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sitemap" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="15" width="6" height="6" rx="2" />
                    <rect x="15" y="15" width="6" height="6" rx="2" />
                    <rect x="9" y="3" width="6" height="6" rx="2" />
                    <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
                    <line x1="12" y1="9" x2="12" y2="12" />
                  </svg>Program & Procedure Development</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>Jobsite Inspections</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="13" y="8" width="8" height="12" rx="1" />
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                    <line x1="16" y1="9" x2="18" y2="9" />
                  </svg>Custom Training Programs</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-list" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" />
                    <line x1="9" y1="12" x2="9.01" y2="12" />
                    <line x1="13" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="9.01" y2="16" />
                    <line x1="13" y1="16" x2="15" y2="16" />
                  </svg>Record Keeping</div>
                <div className="service">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop-analytics" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="4" width="18" height="12" rx="1" />
                        <path d="M7 20h10" />
                        <path d="M9 16v4" />
                        <path d="M15 16v4" />
                        <path d="M9 12v-4" />
                        <path d="M12 12v-1" />
                        <path d="M15 12v-2" />
                        <path d="M12 12v-1" />
                      </svg>Industrial Hygiene</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-accessible" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
                    <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                  </svg>Litigation Support</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  </svg>Enforcement Response</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-intersect" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="8" y="4" width="12" height="12" rx="2" />
                    <rect x="4" y="8" width="12" height="12" rx="2" />
                  </svg>ISNetworld Prequalification Support</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-laptop" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="3" y1="19" x2="21" y2="19" />
                    <rect x="5" y="6" width="14" height="10" rx="1" />
                  </svg>Online Courses</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crosshair" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>Onsite General safety classNamees</div>
                <div className="service"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-skyscraper" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="3" y1="21" x2="21" y2="21" />
                    <path d="M5 21v-14l8 -4v18" />
                    <path d="M19 21v-10l-6 -4" />
                    <line x1="9" y1="9" x2="9" y2="9.01" />
                    <line x1="9" y1="12" x2="9" y2="12.01" />
                    <line x1="9" y1="15" x2="9" y2="15.01" />
                    <line x1="9" y1="18" x2="9" y2="18.01" />
                  </svg>Onsite Construction Safety classNamees</div>
            </div>
        </div>
    </section>
    // Services section ends
  )
}

export default Services