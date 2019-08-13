// import modules
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// import images
import PhdImage from "../../assets/_home/phd2.png";
import teacher from "../../assets/_home/hashemi.png";

// initialize MDC style object
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        border: "1px slid blue"
    },
    input: {
        display: "none"
    }
}));

export default () => {

    const classes = useStyles(); 

    return (
        <div>
        <div className="About">
            <div>
            <img src={teacher} alt="teacher" className=" teacherAvatar" />
            </div>
        </div>
        <div className="about-part2">
            <h2
            style={{
                display: "flex",
                minHeight: "120px",
                alignItems: "flex-end"
            }}
            >
            حسین هاشمی
            </h2>

            <h3
            style={{
                display: "flex",
                alignItems: "center",
                marginTop: 0
            }}
            >
            مدرس دوره‌های طراحی وب، تجربه کاربری
            </h3>
            <p style={{ maxWidth: "800px", paddingBottom: "200px" }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
            از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
            متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
            درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
            داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
            سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </div>
        <div style={{ minHeight: "800px" }}>
            <p>free space</p>
        </div>
        <div className="aboutDown">
            <div className="aboutPart3">
            <p>آموزش کنکور ارشد</p>
            <h2 style={{ margin: "0" }}>موسسه راه دکتری</h2>
            <p style={{ paddingTop: "0px" }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
                می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                استفاده قرار گیرد
            </p>
            <Button variant="outlined" color="primary" className={classes.button}>
                اطلاعات آموزشگاه
            </Button>
            </div>
            <div>
                <img src={PhdImage} alt="phd" style={{ marginLeft: "10px" }} />
            </div>
        </div>
        </div>
    );
};