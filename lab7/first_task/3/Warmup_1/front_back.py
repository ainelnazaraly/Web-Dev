def front_back(str):
  if (len(str)<=1): 
    return str
  
  base = str[1:-1] 
  
  return str[len(str)-1] + base + str[0]