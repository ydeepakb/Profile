import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle}></meta>
      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          background: #fff;
          color: #555;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          font-size: 1.2rem;
          white-space: nowrap;
          color: #000;
          margin-top: 1rem;
        }
        a {
          color: #555;
        }
        .content {
          max-width: 65%;
          margin: 2rem auto;
          padding: 0 1rem;
          font-size: large;
          font-family: sans-serif;
          display:inline-block;
         
          opacity:"0.6"
        }
        .profile-pic{
          max-width: 20%; 
          padding:5px;
          display:inline-block;
        }
        .profile-pic img{
          width:90%;
          border: 1px solid #ddd;
          border-radius: 143px;
        }
        .topic-title{
          padding-bottom: 10px;
        }
        .footnote-ref {
          color: #555;
          font-size: 0.75rem;
          text-decoration-line: none;
        }

        table.blueTable {
          border: 1px solid #1C6EA4;
          background-color: #EEEEEE;
          width: 100%;
          text-align: left;
          border-collapse: collapse;
        }
        table.blueTable td, table.blueTable th {
          border: 1px solid #AAAAAA;
          padding: 3px 2px;
        }
        table.blueTable tbody td {
          font-size: 15px;
          text-align: left;
          padding:5px;
        }
        table.logo-table {
          
          background-color: #fff;
          width: 100%;
          text-align: left;
          border-collapse: collapse;
      }
      table.logo-table tbody td{
        border: 1px solid #1C6EA4;
        border: 1px solid #eeeeee;
        padding: 5px;
       
      }
        table.logo-table tbody td img{
          width:100%;
        }
        table.blueTable tr:nth-child(even) {
          background: #ddd;
        }
        table.blueTable thead {
          background: #1C6EA4;
          background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
          background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
          background: linear-gradient(to bottom,#10a190 0%,#0b5357 66%,#0b4723 100%);
          border-bottom: 2px solid #444444;
        }
        table.blueTable thead th {
          font-size: 15px;
          font-weight: bold;
          color: #FFFFFF;
          border-left: 2px solid #D0E4F5;
        }
        table.blueTable thead th:first-child {
          border-left: none;
        }
        
        table.blueTable tfoot {
          font-size: 14px;
          font-weight: bold;
          color: #FFFFFF;
          background: #D0E4F5;
          background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
          background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
          background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
          border-top: 2px solid #444444;
        }
        table.blueTable tfoot td {
          font-size: 14px;
        }
        table.blueTable tfoot .links {
          text-align: right;
        }
        table.blueTable tfoot .links a{
          display: inline-block;
          background: #1C6EA4;
          color: #FFFFFF;
          padding: 2px 8px;
          border-radius: 5px;
        }
        .view-page{
          display: inline-flex;
        }
        .btn-download-resume{
          padding: 3px;
          color: #fff;
          background: linear-gradient(to bottom,#10a190 0%,#0b5357 66%,#0b4723 100%);
          border-radius: 7px;
          width: 90%;
          height: 30px;
          text-align: center;
        }
        .btn-download-resume a{
          color: #fff;
          padding:5px;
        } 
        .btn-download-resume a:hover{
          color: #ddd;
          
        } 
        .sm-links{
        width:30%;
        display: inline-block;  
        background:#fff;
        }
      `}</style>
      <main>
        <Header />
        <div className="view-page">
          <div className="profile-pic">
          <img src="/profile-pic.jpg" alt="Deepak (The code tweak expert)" />
          <div className="btn-download-resume">
          <a  href="/Deepak Yadav_latest.pdf" target="_blank">Download My Resume</a>
          </div>
          <div>
          <div className="sm-links">
          <a href="https://www.linkedin.com/in/ydeepakb/" target="_blank"><img src="/social-media/linkein.png" /></a>
          </div>
          <div  className="sm-links">
          <a href="https://www.instagram.com/ydeepakb/" target="_blank"><img src="/social-media/insta.png" /></a>
          </div>
          
          <div  className="sm-links">
          <a href="https://www.facebook.com/profile.php?id=100001593536258" target="_blank"><img src="/social-media/facebook.png" /></a>
          </div>
          
          </div>
          </div>
          <div className="content">{children}</div>
        </div>
      
      </main>
    </>
  );
}
