package com.clinic.beautypro.mail;

import org.springframework.stereotype.Service;

import java.io.IOException;

import com.clinic.beautypro.model.MyMail;
import com.sendgrid.*;

@Service
public class EmailService {

    public Response sendEmail(MyMail email) {
        Email from = new Email("messagerobot0@gmail.com");
        String subject = "BeautyPro Website";
        Email to = new Email("piotrg2003@gmail.com");
        Content content = new Content("text/plain", email.getSender() + "\n" + email.getText());
        Mail mail = new Mail(from, subject, to, content);
        Response respons = null;
        SendGrid sg = new SendGrid(
                System.getenv("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"));
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return respons;
    }
}
