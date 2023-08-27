# def calculate_bmi(height:float, weight):
#     return weight / (height * height)

# 
def interpret_bmi(bmi):
    if bmi < 18.5:
        return 'Underweight'
    elif bmi > 18.5 and bmi <= 25:
        return 'Normal weight'
    elif bmi > 25 and bmi <= 30:
        return 'Overweight'
    elif bmi > 30:
        return 'Obses'

def main():
    height = input("please Enter your height in maters:")
    weight = input("Please Enter Your weight in Kg:")
    
    calculate_bmi = lambda weight, height:weight/(height * height)
    bmi = calculate_bmi(int(weight),float(height))
    result = interpret_bmi(bmi)
    print(result)
   

if __name__ == "__main__":
    main()
    