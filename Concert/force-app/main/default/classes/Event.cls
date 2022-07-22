public class Event {
  
  @AuraEnabled
    public static void addNewEvent(String name, String day, String location, String description) {
        Concert__c concert = new Concert__c(); 
        concert.Name = name; 
        concert.Date__c = Date.valueOf(day); 
        concert.Location__c = location; 
        concert.Description__c = description; 
        insert concert; 
    }

@AuraEnabled
    public static void addNewAttendee(String firstName, String lastName, String email, String birthday) {
        
       
            
        Attendee__c attendee = new Attendee__c();     
           attendee.Name = firstName; 
           attendee.LastName__c = lastName; 
           attendee.Email__c = email; 
           attendee.BirthDate__c = Date.valueOf(birthday);
             
           
           insert attendee; 
       
    }    
}