describe("book", () => {
  let testVar;

  beforeEach(() => {
    browser.url("/lambeth_-_brixton/account/login");
    $("#login_Email").setValue("");
    $("#login_Password").setValue("");
    $("#login").click();
    browser.url("/lambeth_-_brixton/BookingsCentre/Index");
    $$(".activityCheckbox")[5].click();
    browser.pause(1000);
    $("#bottomsubmit").click();
    browser.pause(2000);
    browser.switchToFrame($("#TB_iframeContent"));
    const numberOfSlots = $$(".sporthallSlotAddLink").length;
    const selectedSlot = $$(".sporthallSlotAddLink")[numberOfSlots - 34];
    selectedSlot.click();
    browser.pause(2000);
    browser.switchToFrame($("#TB_iframeContent"));
    $$(".MembersButton")[0].click();
    browser.url("/lambeth_-_brixton/Basket");
    const useVoucherButton = $$(".basketItem a")[0];
    useVoucherButton.click();
    browser.pause(1000);
    $("#btnPayNow").click();
  });

  it("should work", () => {
    // expect(testVar).toBe(1);
  });
});
