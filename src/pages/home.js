import React from 'react'
import '../style/home.css';

export default function home() {
  return (
    <>
    <div className='whole'>

<div>
<center><img className='imagep' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI8AXwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAQIHAAj/xAA6EAACAQMDAQUFBQYHAQAAAAABAgMABBEFEiExBhNBUXEiMmGBkQcUI7HBQ1JicqHRFSRCU2Oy4TP/xAAZAQACAwEAAAAAAAAAAAAAAAABAgADBAX/xAAkEQACAgICAQQDAQAAAAAAAAAAAQIRAxIEITETMkFRBWFxIv/aAAwDAQACEQMRAD8AWIIIzjIP1onDDEVAwfrQWz1CA4ywoxBfWuB7dS2DREktlDIuApzXrXQYzzhutWY72149uidpf2oHvipsw6IgttEhVskN9aMxRNHEEV2wKiGoWajc0gAqeLUrBzhblCfgaOzB6aBGp6X3+SSxqtbaOFjKksKYZ7m2xkSr9agFxb44kFDZk9NAM6SFz7R+lD7nSosnJOfSmWS4t/8AcFD7qWA/tBU2ZPTQq3elrklCc+lDrrS5CBgn6U0SPDu98VhpINvvipYdEhItNG1OZQ0MMhHwra603VLRC8qSoBX0F2Z0a2g02ACNeUBJxVLtnpUTafMVjXIXniqm67HX0cAiN+5/DZ29KswtqZbCmTI68Ue0r7tHC2/AYUeu5rOHR5Z0A3KmAQOSTxihs7odQT+ROuLqeK0xI7s5xnmqD3lzGuIHbGfjyfOnrst2SbXoTc3I7q2XhcdWNMFx2E01IGSNpA+PeODTuaQVjbORrql1K3LkuOhLHg/Oi019fLaxyJKSCMN60a1D7OrhQ8lncq7DnbjGaB20c0DPbXSsxXgq3VP/ACopKQJQlHyQDU9Qb/Wxr33vUZAdu9seQJp07KdmxqQLlcJnHIrpGi9m7WzhCd0ufMr1pFNN0SWNpWfPU13fIcPuB/iGKhbULv8Aervnajsda6lA2FCt4FRSFcfZzInuyt9KLnXkCjsdj0Nf8hB/IPyqr2njb/DLpgM/hN+VXtCZWsIMEe4PyrOvFBp0+8gAoetSXtEXuPmg3GMqfOrt1uubBEVsESAjPT19BXnsN8pbwzWL1DFc2tuGwkhG75kL+ppmPFHXezYGmdlbQTpJnZu2pGWbB55Aqe31KyvwxtZg5ThwQQyn4g8itdc0V9TtYlgvLm3VFwFhkCg+vBqPs3os2n20xupjcMeFdsZx8Tis7bZqVJEMmq6elz93FwHmBwUjVnI9cA4rnP2mRm01+G6tzt72IHcOjjoacbrQNSk1CR4NQktoy2VESj+uaXftYtpItP0ySaTvZ03K8m3G7gc4owfZMi/y6LHY7XptN2/eFEkLYwU4P0rqFhr9ndxK8UqlT055rg/Zi7WWBonGWUZHyq4+pJCxVCyOD1U4ovFbtMreTqmd2+/wy8KQ3zqtczxr7y0hfZ9qQuY7jv52dlk43HoMU16nPbooPfKM+BNGpPoqbSFjQO20lhZRwXELOyDAIPWsa72uuNVgMMad0jDB5yTSZEWkIxRS2gZsVescSpyZpFbgrigmtTLY6zavLGZEQIzIDjdhicU5QWpx0pP7cRYnimJ2sG2KvmBzn60ZpUHG3Z1q71yODQ476M7oniV1b4EcE1FaaybfT42AunWT2y33ORg5PiMDOPKlb7NNQXUtObSboZNm693noUJyFPpgj0xR6ax1PRzJBpBkNqWJjUXJXYD4YIIx6VippuzqYtZKjaPWU/xcxiTmcbu6aNo2Ugcnawzg0m/bDdoYrOHJMrqxC+Q45pwt9MTT4ZNR1G4aW6cFpJZHLbR4KufD9a4t2p1qTW9XmvTlYQNkSHwQfr40cUW5for5ElGPRtoUphlWQHjPtD4dDRq+sGlmaVBwfKlixuVjI3dKe9AvIpkht7jBWQfhSD/qfKtUfJhl7egJaNe6ZN3lq5Q+Pka9e65qssm+WUHwxinG70tPBaCX2mDwFWaop2YQsLYccCjtrbgY4FDtPXpRtZI7eFppmCogyTUGSbdIswwDHSkvtnos81yk1ypWzxtMqEdSfKr9925tIUIsbeSV/BpMKv8AelLU9bvdWfN1KSvgi8AelJI6XH/HZZ9y6GH7OLeFbvULZ5sTyRoYWBwTtzk+vINPdzfahbKqtGswI948H+lcXillh2vG7JIrbldTgg/A0ete3eqQxCO5WK5x0ZvZb544/pWXJCTdo6EuFolQ76rNNPbvJceCnao6L8a4VMPbeMY2hjz504av2u1HULZ7cLHBE/vbMkketKbqUfevzGcUcMXHyY+TglrZIti402C6/ZyStET+6Rj9Dn5Ub0O4xZyJt3LCeD4g5peS7niRoN57l2DMmcjI6H18KKaTei3c7SFjYYfIyCPiK0HPR1hWMkS7yC20HI8RQq+Tk8VDo11KJUgkJaGSMtC2c45GR6dMVZveppkVSVM20/wpf7U6y01w9rE/4MR24Hi3jRSC57mB5f3FLfQVz6Wd5JGZjkscmhJ0dP8AGKKk8j+CQnJqWOoouamBxSWd/H9kjdKiK1tmsVC2VMiKZ8KieCrNYagUyxxfkoSWwYdKhWB42ytEsVDKcGjZgzcTG+2MnZK6up7jukZC0cREaSEjIznAPhTJPJ30QfBBzhlPUEdRSJoN4bTVLaUeEgB9Dwfzp3uwUmmI4V2DD1xj9KeLOVzcUcck18g26k26XdH/AIW/Kkct40138pGlXP8AIRSezcVJD8OVQZcsm3u3wqwTVHTjzKfSrTNVZ2uPkvEmyQGs5qENWd1EvUyQmtSa1LVqWoAlMkU1UnYCUr8KnQ81QuW/zb/DioZOTlqCf7LEL7ZFPka6FdTZFc3jb2hTzcTeyM+Qp4nI5srUQbeMG064BP7M0pu3FMV2xNjMP4KWXPFGRVhlUGWLKTbvHzqfvKh0uLvTcHjCQs2T5+FaOSDSG7Dnax19FoS+dZ7wedUt9Z30C5cku94POtC+TVXea9vNQj5NlxH5qhK+6d2HianG4Rs3kDVJTzRRn5OW1GIQ06Mz3kMfgzjPp1NN1zyTS/2ajBnlmI9xcD1NGZpKeJgzytpA91eeB4k5ZhgUDn027i/+ke0DzYUctJPxVPkaq6xOSrUsm7omP2sxp8cdro93KxDPLiMfA0OJz1rCykwIh6Ak1oTUZqxPWP8ATY48qxj4VqTXs0BtkbcVkYFabq8DUCpI3mfMLYqovJqdiNw8sc1dtdNjmIO4gdSKJRmk5SsKaOvc2C+chLf2qWWTzrDEIoVRgDpVeV6cxyduz//Z" alt=" "></img>
</center></div>
<center>Surthi Lakshmi | Msc Software Systems
  <br/> lakshmisurthis@gmail.com | 9489444535 | linkedin.com/in/surthi-lakshmi-ab9aa1220 | https://github.com/surthis
</center>
<br/>
<hr/>
<div className="main">
<div className='flex1'>
  <br/>
 <b>Objective:</b>
 
 <div><br/>Looking for a challenging position where I am able 
  to learn and apply my innovative ideas to the organization
   with my technical skills.</div>
 <br/>
 <b>Projects:</b>
 <div>
  <ul><li>Temple management website Using bootstrap</li>
<li>Glowing Tree Using REACT JS</li>
</ul></div>
<br/>
<b>Paper Presented:</b>
<div><br/>
   Smart Home at Madras Institude Of Technology
</div>
<br/>

<b>Technical Skills</b>
<ul>
  <li> C,Java,MY SQL</li>
  <li>HTML,CSS,REACT JS</li>
 <li>GIT(Beginner)</li>
</ul>
<div>
  <br/>
<b>Skills</b>
       <ul>
<li>poster presentation
(coordinator)</li>

<li>Team leader (YUCI club)</li>
<li>Good communication
</li></ul>
</div>

</div>
<div className='flex2'>
<br/>
<b>Educational Qualification:</b>
<div><ul><li>MSC SS | 2022-Present ,CGPA - 8.88/10 upto VI semester</li>
<li>HSC| Jun 2018-Mar 2019, Secured 71%</li>
<li>SSLC | Jun 2016-Mar 2017,Secured 93% </li>
</ul></div>
<br/>
<b> Internships:</b>
<div>
  <ul>
    <li>Learnovate E-Commerce -Web Developer</li>
    <li>Skewess Tech Private Limited-React Developer</li>
  </ul>
</div>
<br/>
<b>Idea Presented</b>
<div><br/>
  Designing an safety application for children
        Kongu Engineering college</div>
        <br/>
       <b>Area Of Interest</b>
       <div>
      <ul>
        <li>Database Management Systems</li>
       <li>Data Structure</li>
      </ul>
       </div>
       
</div>
</div>
</div>
</>
 
  )
}
