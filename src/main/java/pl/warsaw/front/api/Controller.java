package pl.warsaw.front.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
@RequestMapping("/")
public class Controller {

    @GetMapping
    public String getUa(){

        return "ua";
    }


    @GetMapping("/pl")
    public String getPl(){

        return "pl";
    }

    @GetMapping("/en")
    public String getEn(){
        return "en";
    }
}
