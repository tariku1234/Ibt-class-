def totalppl(ppl):
    totalprice = ppl * 500
    tip = totalprice * 0.15
    totalwithtip = totalprice+ tip
    individualshare = totalwithtip / ppl
    return totalprice, tip, totalwithtip,individualshare
    
print(f"Total price: {totalppl(3)[0]}")
print(f"Tip: {totalppl(3)[1]}")
print(f"Total with tip: {totalppl(3)[2]}")
print(f"Individual share: {totalppl(3)[3]}")

