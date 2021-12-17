import React from "react";
// import "./styles.css";
import InstagramEmbed from 'react-instagram-embed';


export default function App() {
  return (
    <div>
      
      <InstagramEmbed
        url='https://www.instagram.com/p/Bd22d_fAWID/?utm_source=ig_web_copy_link'
        clientAccessToken='IGQVJWYmVOTHJqNnhBRnAwbGJnZAWtkckV2djZAvOFllckFQUTh1cHo3b29VbjVmdjZAuaFJyNUpDaWhfdHRjN295cFZAURTJ1NkNPUnJzcE5pZA0M2MXJmTF8weElNejduS1lycGI2QklqTHhicnlVQS1lTAZDZD'
        maxWidth={500}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}