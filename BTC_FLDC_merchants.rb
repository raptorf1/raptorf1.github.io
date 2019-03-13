require 'net/http'
require 'json'

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

# Calculate amount to be paid by customer in BTC using data from Bitstamp's API plus convertion commisions
amount2 = amount + 0.90
topay = (amount2 / btcprice)
topay2 = topay * 0.015 + topay
topayfinalBTC = topay2.round(8)

# Calculate amount to be paid by customer in FLDC using the BTC amount above and Bittrex API plus convertion commisions
amount3 = topayfinalBTC / fldcprice
topay3 = amount3 * 0.1 + amount3
topayfinalfldc = topay3.round

# Print the results for both BTC and FLDC on screen
p "The amount due is #{topayfinalBTC} BTC or #{topayfinalfldc} FLDC."