#include<bits/stdc++.h>
using namespace std;

#define lp(i,n) for(int i=0;i<n;i++)

string rotateString(str,i,j,k){
  reverse(str.begin(), str.end());
  reverse(str.begin()+i-1, str.end()+i+k-1);
  reverse(str.begin()+i+k, str.end()+j-1);
  
}

int main()
{
    string str;
    cin>>str;
    
    int operations;
    cin>>operatons;
    
    while(operations--)
    {
      int i,j,k;
      
      cin>>i>>j>>k;
      
      
    }

    return 0;
}