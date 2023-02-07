using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_msperry6.wwwroot.Models
{
    public class CalcModel
    {
        //creates everything shown below
        [Range(0, 100, ErrorMessage = "Percent grade must be between 0 and 100.")]
        public int Pgrade { get; set; }
    }
}

/*
//Setter
public void setpGrade(int input)
{
    this.pGrade = input;
}

//Getter
public void getpGrade(int input)
{
    return this.pGrade;
}
*/