import { Page, expect, Locator } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";

export default class ClaimManagementPage {
  readonly page: Page;
  public claimManagement: {
    claimManagementModule: Locator;
    insuranceprovider: Locator;
    billReview: Locator;
    searchButton: Locator;
    invoiceNumberField: Locator;
    counterItem: Locator;
    fromDate: Locator;
    loadButton: Locator;
    tableData: Locator;
    dashboardModule: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.claimManagement = {
      claimManagementModule: page.locator("(//span[text() = 'ClaimMgmt'])[1]"),
      insuranceprovider: page.locator("(//a[@class='report_list'])[1]"),
      billReview: page.locator("//a[text() = ' Bill Review ']"),
      searchButton: page.locator("//div[@class='search-list']//button"),
      invoiceNumberField: page.locator('//div[@class="search-list"]//input'),
      counterItem: page.locator("//div[@class='counter-item']"),
      tableData: page.locator("(//div[@class='col-md-12']//tbody)[2]//tr"),
      fromDate: page.locator(`(//input[@id="date"])[1]`),
      loadButton: page.locator(`//button[text() = 'Load ']`),
      dashboardModule: page.locator(`//div[@class="page-logo"]`),
    };
  }

  /**
 * @Test16 This method verifies the Bill Review functionality within the Claim Management module.
 * 
 * @description Navigates to the Claim Management module, selects an insurance provider, and opens
 *              the Bill Review section. Filters the bills using a "From Date" and loads the results.
 *              Verifies that the results table contains entries.
 * 
 * @param data - A record containing the "FromDate" to filter the bills.
 * @return boolean - Returns true if the results are successfully loaded and verified; false otherwise.
 */
  async verifyBillReview(data: Record<string, string>): Promise<boolean> {
    try {
      const fromDate = data["FromDate"];
      await CommonMethods.highlightElement(
        this.claimManagement.claimManagementModule
      );
      await this.claimManagement.claimManagementModule.click();
      await this.page.waitForTimeout(2000);
      await CommonMethods.highlightElement(
        this.claimManagement.insuranceprovider
      );
      await this.claimManagement.insuranceprovider.click();
      await this.page.waitForTimeout(2000);
      await CommonMethods.highlightElement(this.claimManagement.billReview);
      await this.claimManagement.billReview.click();
      await this.page.waitForTimeout(2000);
      await CommonMethods.highlightElement(this.claimManagement.fromDate);
      await this.claimManagement.fromDate.type(fromDate, { delay: 100 });
      await this.page.waitForTimeout(1000);
      await CommonMethods.highlightElement(this.claimManagement.loadButton);
      await this.claimManagement.loadButton.click();
      await this.page.waitForTimeout(1000);
      const count = await this.claimManagement.tableData.count();
      expect(count).toBeGreaterThan(0);
      return true;
    } catch (error) {
      console.error("Error searching and verifying patients:", error);
      return false;
    }
  }

}
