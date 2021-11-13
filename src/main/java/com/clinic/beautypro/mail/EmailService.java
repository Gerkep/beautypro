package com.clinic.beautypro.mail;

import org.springframework.stereotype.Service;

import java.io.IOException;

import com.clinic.beautypro.model.MyMail;
import com.sendgrid.*;

@Service
public class EmailService {

    public Response sendEmail(MyMail email) {
        Email from = new Email("gerkewebs@gmail.com");
        String subject = "Message from website";
        Email to = new Email("piotrg2003@gmail.com");
        Content content = new Content("text/plain", email.getSender() + "\n" + email.getText());
        Mail mail = new Mail(from, subject, to, content);
        Response respons = null;
        SendGrid sg = new SendGrid("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");
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
