import { Container,Row,Col } from "react-bootstrap";
import  AccordionComponent from "../Components/accordion/AccordionComponent";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
export default function Help() {
    return(
        <>
        <Container>
            <Row style={{paddingTop:"10%",paddingBottom:"10%"}}>
                <Col sm={12} md={8} lg={8}>
                    <h4 style={{fontWeight:"400",color:"#777777"}} > FREQUENTLY ASKED QUESTIONS</h4>
       <AccordionComponent eventKey="0" Header="WHAT IS SUPERMEAL?" Body="Supermeal is a global online food delivery platform operating successfully in South Asia, Ireland, and the United Kingdom. Nicknamed the Google for food orders, as it is a vastly intelligent search engine, we provide you a service which allows you to choose from local restaurants and place orders on our website or app. With just a few clicks you can order from a wide variety of your favourite cuisines online!"/>        
       <AccordionComponent eventKey="1" Header="WHAT DOES SUPERMEAL DO?" Body="Our process is very simple, we take your desired order or reservation and send it to the restaurant through an automated process. This saves you the trouble of having to deal with all the hassle of finding a particular restaurant's contact details and placing your order with them manually, and we make sure that you receive your order on time along with sending you regular status updates
        through notifications on the app. You will know exactly when your order is confirmed, in the kitchen being prepared, ready and on its way to be delivered to you."/>
       <AccordionComponent eventKey="2" Header="ARE THERE ANY EXTRA CHARGES APPLIED WHEN ORDERING FROM SUPERMEAL?" Body="There are no extra charges nor any hidden fees when paying with credit cards that you will usually find on most online platforms you place an order through
       . The only extra charges will be the restaurant’s delivery charges which are listed on every restaurant’s information section."/>
       <AccordionComponent eventKey="3" Header="HOW DO I PLACE AN ORDER ON SUPERMEAL?" Body='Create an account or login via your Facebook or Google+ account or place an order as a guest. However, logged in users benefit from features such as Order Status Tracking, Order History etc. Enter your postcode or area then you have the option to enter a cuisine or specific dish you are looking for. Once you have entered the details, click on a restaurant to view their menu. You can search to find the item that you want to order and add items to your cart. Then press "Place Order" and select or enter your address, review your order or apply voucher code
       . Confirm your details are correct by pressing "Checkout". Your order will then be placed and sent to the restaurant’s printing device immediately'/>
       <AccordionComponent eventKey="4" Header="CAN I MAKE A PRE-ORDER FOR LATER?" Body="Yes. Depending on the restaurant's working and delivery hours, some restaurants allow customers to place an order in advance by selecting the date and time. 
       When confirming your order, you can leave comments in order to tell us what time you want your food to be delivered."/>
       <AccordionComponent eventKey="5" Header="CAN I SAVE MORE THAN ONE ADDRESS TO MY SUPERMEAL ACCOUNT?" Body='Yes. You can add as many addresses as you need to your account.
        Go to your profile page, in profile settings click on "Add New Address" to register as many addresses as you like.'/>
       <AccordionComponent eventKey="6" Header="HOW LONG WILL MY ORDER TAKE?" Body="This entirely depends on your chosen restaurant.
        All restaurants show their estimated delivery time in their information section. However, the time may vary in case of heavy traffic."/>
       <AccordionComponent eventKey="7" Header="WHAT ARE THE PAYMENT METHODS?" Body="You can pay by selecting pay with card and then entering your card details, 
       by selecting pay with cash and pay when your delivery arrives or use your Supermeal Credit in your e-wallet."/>


       <AccordionComponent eventKey="8" Header="WHAT IS THE SUPERMEAL REFERRAL PROGRAM??" Body="The Supermeal referral program is our way to say thanks to our customers. Through this you can now earn Supermeal credit which can be used as a discount on every meal you order from Supermeal.
Visit here for more information on how our referral program works."/>

       <AccordionComponent eventKey="9" Header="WHAT IS SUPERMEAL CREDIT?" Body="Supermeal Credit can be earned by when your referred friends place an order on www.supermeal.pk . Each time someone registers through your referral link and places an order, you can earn up to Rs.50 Supermeal credit.
        For more information on how Referral System works visit “Referral FAQs” at the bottom of the homepage.?"/>
       <AccordionComponent eventKey="10" Header="HOW CAN I REDEEM CASHBACK AS A DISCOUNT??" Body="Cashback is only rewarded to registered users on Supermeal.pk

You can redeem your accumulated cashback credit as a discount on the checkout page. Cashback is only applicable on item's cost and is exempt from any service charges such as delivery fees and VAT.

Note: Cashback is not applicable when using a voucher code as a form of discount when you checkout!"/>


       <AccordionComponent eventKey="11" Header="HOW CAN I REDEEM VOUCHER CODE AS A DISCOUNT??" Body="Voucher codes can only be applied as a discount when you checkout as a registered user on Supermeal.pk

You can redeem a voucher code as a discount on the checkout page. Voucher code discount is only applicable on item's cost and is exempt from any service charges such as delivery fees and VAT."/>

  

                </Col>
                <Col sm={12} md={4} lg={4}>
                    <h5 style={{fontWeight:"700"}}>CONTACT US</h5>
                    <MailOutlineIcon style={{color:"#777777"}}/> <a style={{fontWeight:"700",textDecoration:"none",color:"#777777"}} href="">support@supermeal.pk</a>  <span style={{color:"#777777"}} > | Email us</span><br/>
                    <PhoneIcon style={{color:"#777777"}}/> <span  style={{fontWeight:"700",color:"#777777"}}  > (000) 000-000-000 </span> <span style={{color:"#777777"}} > | Customer Service Helpline </span> 
<br/><br/>
                    <h5 style={{fontWeight:"700"}}>BUSINESS INQUIRY</h5>
                    <p style={{color:"#777777"}}>Do you own a Restaurant and want to register your business on our platform?</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}