# Requirements to call the APIs
require 'net/http'
require 'json'

# If needed separate outputed values with commas every 3 digits
def separate_comma(number)
  whole, decimal = number.to_s.split(".")
  whole_with_commas = whole.chars.to_a.reverse.each_slice(3).map(&:join).join(",").reverse
  [whole_with_commas, decimal].compact.join(".")
end

# Call Bitstamp API to learn BTC / EURO price
url = 'https://www.bitstamp.net/api/v2/ticker/btceur'
uri = URI(url)
response = Net::HTTP.get(uri)
result = JSON.parse(response)
btcprice = result["bid"].to_f

# Call Bittrex API to learn BTC / FLDC price
url2 = 'https://api.bittrex.com/api/v1.1/public/getticker?market=BTC-FLDC'
uri2 = URI(url2)
response2 = Net::HTTP.get(uri2)
resultA = JSON.parse(response2)
fldcprice = resultA["result"]["Bid"].to_f

# Ask business owner to put the desired amount in EURO
puts "Please put the amount to be paid in EURO:"
amount = gets.chomp.to_f

# If the user input is 0 or not an amount then the appropriate message is shown
if amount == 0 then "You did not enter a valid amount! Please try again."

# If the output is an amount then calculate amount to be paid by customer in BTC using data from Bitstamp's API plus convertion commisions
else
amount2 = amount + 0.90
topay = (amount2 / btcprice)
topay2 = topay * 0.015 + topay
topayfinalBTC = topay2.round(8)
topayfinalBTC2 = separate_comma(topayfinalBTC)

# Calculate amount to be paid by customer in FLDC using the BTC amount above and Bittrex API plus convertion commisions
amount3 = topay2 / fldcprice
topay3 = amount3 * 0.1 + amount3
topayfinalfldc = topay3.round
topayfinalfldc2 = separate_comma(topayfinalfldc)

# Print the results for both BTC and FLDC on screen
"The amount due is #{topayfinalBTC2} BTC or #{topayfinalfldc2} FLDC."

end
