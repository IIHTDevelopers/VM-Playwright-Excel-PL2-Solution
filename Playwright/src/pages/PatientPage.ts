import { Page, expect, Locator } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";
// import * as fs from "fs";

export default class PatientPage {
  readonly page: Page;
  public patient: {
    patientLink: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.patient = {
      patientLink: page.locator('a[href="#/Patient"]'),
      searchBar: page.locator("#quickFilterInput"),
      hospitalSearchBar: page.locator("#id_input_search_using_hospital_no"),
      patientName: page.locator(
        "//div[@role='gridcell' and @col-id='ShortName'][1]"
      ),
      patientCode: page.locator(
        "//div[@role='gridcell' and @col-id='PatientCode'][1]"
      ),
    };
  }

  /**
   * @Test7 Searches for and verifies patients in the patient list.
   *
   * @description This method navigates to the patient section, iterates over a predefined list of patients, and performs
   *              a search operation for each patient name. After each search, it verifies that the search result matches
   *              the expected patient name. If all patients are verified successfully, it returns true; otherwise, false.
   *
   * @returns {boolean} - Returns true if all patient searches are verified successfully; returns false if an error occurs.
   */

  async searchAndVerifyPatients(patientData: Record<string, string>): Promise<boolean> {
    // write your logic here
    return false;
  }
}
