export interface Leads {
    Contatto_referente:            null;
    Owner:                         CreatedBy;
    Company:                       string;
    Email:                         string;
    $currency_symbol:              string;
    Visitor_Score:                 null;
    $field_states:                 null;
    Last_Activity_Time:            null;
    Industry:                      null;
    $state:                        string;
    Unsubscribed_Mode:             null;
    $converted:                    boolean;
    $process_flow:                 boolean;
    Exchange_Rate:                 number;
    Test:                          null;
    Attivit_Marketing_Associativo: null;
    Currency:                      string;
    Street:                        null;
    Zip_Code:                      null;
    id:                            string;
    $approved:                     boolean;
    Prospect_Status:               null;
    $approval:                     Approval;
    First_Visited_URL:             null;
    Days_Visited:                  null;
    Stato_associato:               null;
    Created_Time:                  string;
    $editable:                     boolean;
    City:                          null;
    No_of_Employees:               null;
    State:                         null;
    $status:                       string;
    Country:                       null;
    Last_Visited_Time:             null;
    Created_By:                    CreatedBy;
    Annual_Revenue:                null;
    Secondary_Email:               null;
    PIVA:                          null;
    $data_enrichment_stats:        null;
    Description:                   null;
    Number_Of_Chats:               null;
    $photo_id:                     null;
    Rating:                        null;
    $review_process:               Approval;
    Website:                       null;
    Twitter:                       null;
    Average_Time_Spent_Minutes:    null;
    $canvas_id:                    null;
    Salutation:                    null;
    First_Name:                    null;
    Full_Name:                     string;
    Lead_Status:                   null;
    Record_Image:                  null;
    Modified_By:                   CreatedBy;
    $review:                       null;
    Skype_ID:                      null;
    Phone:                         null;
    Email_Opt_Out:                 boolean;
    Caricamento_file_1:            null;
    Designation:                   null;
    Modified_Time:                 string;
    $converted_detail:             ConvertedDetail;
    Unsubscribed_Time:             null;
    Mobile:                        string;
    $orchestration:                boolean;
    Prospect_Source:               null;
    First_Visited_Time:            null;
    Altri_referenti:               any[];
    Last_Name:                     string;
    $in_merge:                     boolean;
    Referrer:                      null;
    Lead_Source:                   null;
    Tag:                           any[];
    Fax:                           null;
    $approval_state:               string;
}

export interface Approval {
    delegate?: boolean;
    approve:   boolean;
    reject:    boolean;
    resubmit:  boolean;
}

export interface ConvertedDetail {
}

export interface CreatedBy {
    name:  string;
    id:    string;
    email: string;
}