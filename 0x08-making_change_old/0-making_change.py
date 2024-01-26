#!/usr/bin/python3
"""
Coin Change Algorithm
"""

def makeChange(coins, total):
    """
    Calculate the fewest number needed to meet a given total amount.

    Args:
        coins (list): A list of coin values available.
        total (number): The target amount.

    Return:
        The fewest number of coins needed to reach the total,
        or -1 if not possible.
    """
    # If the target amount is less than or equal to 0, no coins are needed.
    if total <= 0:
        return 0

    # Sort the coins in descending order for optimization.
    coins.sort(reverse=True)

    # Initialize variables for the loop.
    i, ncoins = (0, 0)
    cpy_total = total
    len_coins = len(coins)

    # Iterate through the coins to find the fewest number needed.
    while(i < len_coins and cpy_total > 0):
        if (cpy_total - coins[i]) >= 0:
            # If the current coin can be subtracted from the remaining total, do so.
            cpy_total -= coins[i]
            ncoins += 1
        else:
            # Move to the next coin if the current coin is too large.
            i += 1

    # Check if there is remaining total or no coins were used.
    check = cpy_total > 0 and ncoins > 0

    # Return -1 if there is remaining total or no coins were used, else return the number of coins used.
    return -1 if check or ncoins == 0 else ncoins

