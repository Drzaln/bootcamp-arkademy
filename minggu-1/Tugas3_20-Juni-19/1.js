let inp = ["kasur rusak", "kambing", "makam", "tabloid", "nurses run"]

palindrome = data => {
  let ans = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      var re = /[\W_]/g
      var lowInp = data[j].toLowerCase().replace(re, "")
      var reverseStr = lowInp
        .split("")
        .reverse()
        .join("")
      ans.push(reverseStr === lowInp)
    }
    return ans
  }
}

console.log(palindrome(inp));
