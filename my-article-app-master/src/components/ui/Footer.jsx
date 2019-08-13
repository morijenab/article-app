// import modules
import React from 'react';
import Button from '@material-ui/core/Button';

// export default function component
export default () => {
    return (
        <footer className="footerContainer">
            <div className="footer">

                <div className="footerContent">
                    <dl className="aboutEdu">
                        <dt> درباره آموزش </dt>
                        <dd><a href="/"> تماس با ما </a></dd>  
                        <dd><a href="/"> بلاگ </a></dd>  
                        <dd><a href="/"> قوانین و مقررات </a></dd>  
                        <dd><a href="/"> سوالات متداول </a></dd>  
                    </dl>
                    <dl className="usersRights">
                        <dt> حقوق کاربران </dt>
                        <dd><a href="/"> قوانین و مقررات </a></dd>  
                        <dd><a href="/"> سوالات متداول </a></dd> 
                        <dd><a href="/"> شرایط استفاده </a></dd> 
                        <dd><a href="/"> حریم خصوصی </a></dd> 
                    </dl>
                    <dl className="TeachInEdu">
                        <dd> اگر آموزشگاه هستید و تمایل دارید که خدمات خود را در سطح دنیا گسترش دهید از طریق لینک زیر اقدام کنید و به جمع مدرسین سایت آموزش بپیوندید </dd>  
                        <dd>
                            <Button variant="outlined">
                                آموزشگاه جدید
                            </Button>
                        </dd> 
                    </dl>
                    <dl className="eNamad">
                        <dd></dd>
                    </dl>
                </div>

                <div className="footerBottom">

                    تمام حقوق برای آموزش محفوظ است  

                    <div className="footerBottomIcons">
                        <span id="facebook"></span>  
                        <span id="twitter"></span>  
                        <span id="instagram"></span>
                    </div>

                </div>
                
            </div>
        </footer>
    );
}