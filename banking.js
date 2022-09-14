// handle deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newDepositInput = document.getElementById("deposit-input");
    const newDepositAmount = newDepositInput.value;
    const newTotal = parseFloat(newDepositAmount);

    const preDeposit = document.getElementById("pre-deposit");
    const preAmount = preDeposit.innerText;
    const preTotal = parseFloat(preAmount);

    const totalDeposit = newTotal + preTotal;

    preDeposit.innerText = totalDeposit;

    // clear the deposit input
    newDepositInput.value = "";
    // handle total balance
    const preBalance = document.getElementById("balance");
    const balanceText = preBalance.innerText;
    const preBalanceAmount = parseFloat(balanceText);
    const totalBalance = preBalanceAmount + newTotal;
    preBalance.innerText = totalBalance;
    // console.log(totalBalance);
  });

// balance withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawInputText = withdrawInput.value;
    withdrawInput.value = "";
    const newWithdrawValue = parseFloat(newWithdrawInputText);

    const preWithdraw = document.getElementById("withdraw");
    const preWithdrawText = preWithdraw.innerText;
    const preWithdrawValue = parseFloat(preWithdrawText);

    const totalWithdraw = newWithdrawValue + preWithdrawValue;
    preWithdraw.innerText = totalWithdraw;

    // handle total balance
    const preBalance = document.getElementById("balance");
    const balanceText = preBalance.innerText;
    const preBalanceAmount = parseFloat(balanceText);
    const totalBalance = preBalanceAmount - newWithdrawValue;
    preBalance.innerText = totalBalance;
    // console.log(totalBalance);
  });
