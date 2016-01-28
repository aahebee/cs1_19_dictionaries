// Write a function as specified in each of the paragraphs below.

// Write a function callled `showPerson`.  It takes a dictionary with
// attributes 'name' and 'email'.  It gives back a string. For example,
// showPerson({'name': 'Daniel Bergey', 'email': 'dbergey@friendscentral.org'})
// returns "Daniel Bergey <dbergey@friendscentral.org>"
    var showPerson = function(p) { return p.name+' <'+ p.email+'>'}
// Write `showDate`.
// Input: {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}
// Output: "1970-01-31T12:59:59" Note the T between date and time
  
    
var showDate = function(o) { 
if (o.year < 10) {
    o.year ='0' + o.year;
 }
 
 if (o.month < 10) {
    o.month ='0' + o.month;
 }
 
 if (o.day < 10) {
    o.day ='0' + o.day;
 }
 
 if (o.second < 10) {
    o.second ='0' + o.second;
 }
 
 if (o.minute < 10) {
    o.minute ='0' + o.minute;
 }
 
 if (o.hour < 10) {
    o.hour ='0' + o.hour;
 }
 
 
    return o.year+'-'+ o.month+ '-' + o.day + 'T' + o.hour + ':' + o.minute + ':' + o.second

};
 

    

// compareInts
// Input: 2 integer numbers
// Output: one of "LT", "EQ", or "GT" (less than, equal, or greater than)
var compareInts = function (d, z) {
if (d < z) {
    return "LT";
}


if (d == z) {
    return "EQ";
}



if (d > z) {
    return "GT";
}
};
    

// compareDates
// Input: Two dates, in the format:
// {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}
// Output: one of "LT", "EQ", or "GT"
var compareDates = function (d,z) {
    if (d.year > z.year) {  
    return "GT";
  }
 
     if (d.year < z.year) {  
    return "LT";
  }
 
          if(d.year == z.year){
          if(d.month > z.month){
          return "GT"
          }
          
          if(d.month < z.month){
              return "LT"
          }
          
          if(d.month == z.month)
          if(d.day > z.day){
              return "GT"
          }
          
          
                    if(d.day < z.day){
                    return "LT"
                    }
                    
                  
                    
                    if(d.day == z.year){
                    if(d.hour > z.hour){
                    return "GT"
                    }
                    
                    if(d.hour < z.hour){
                     return "LT"
                    }
                    
                    if(d.hour == z.hour){
                    if(d.minute > z.minute){
                    return "GT"
                    }
                    
                    if(d.minute < z.minute){
                    return "LT"
                    }
                    
                    if(d.minute == z.minute){
                    if(d.second > z.second){
                    return "GT"
                    }
                    
                    if(d.second < z.second){
                    return "LT"
                    }
                    
                    if(d.second == z.second){
                    return "EQ"
                    }
                }
            }
        }
    }

          
};

                       
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
          
        
        





// elementOf
// Input: a String and a list of Strings
// Output: true or false (lowercase - these are JS keywords)
// return true if the first input is present in the list (second input)




// hasTag
// Input: a String and an Email
// Email has the following attributes:
// sender, recipients, subject, date, body, tags
// Output: true or false
// return true if the first input is present in the tags of the email

// filterByTag
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list with those emails that have the first input in their tags
// return the emails in the same order they appear in the input
// use hasTag

// parseYear
// Input: String, in the format "2016"
// Output: Int, 2016
// use `parseInt`:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// parseDate
// Input: String, in the format"2016-01-20T13:41:00"
// Output: A Date dictionary, with the attributes:
// year, month, day, hour, minute, second
// use parseInt and substr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// inSubject
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'subject' field of the Email
// use .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// filterBySubject
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their subject
// use inSubject

// inBody
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'body' field of the Email

// filterByBody
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their body
// use inBody
