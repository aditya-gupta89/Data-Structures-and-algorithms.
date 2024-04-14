#include <bits/stdc++.h>
using namespace std;

void selectionSort(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        int index = i;
        for (int j = i + 1; j < n; j++)
            if (arr[index] > arr[j])
                index = j;
        int temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}

void insertionSort(int arr[], int n)
{
    for (int i = 1; i < n; i++)
    {
        for (int j = i - 1; j >= 0; j--)
        {
            if (arr[j] > arr[j + 1])
            {
                int tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
            else
                break;
        }
    }

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}

void bubbleSort(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}

int QuickSort(int arr[], int start, int end)
{
    int pivot = start;
    int leftI = start;
    int rightI = end;

    while (leftI < rightI)
    {
        while (arr[leftI] <= arr[rightI] && leftI != rightI)
        {
            rightI--;
        }
        if (leftI == rightI)
            return pivot;
        int tem = arr[pivot];
        arr[pivot] = arr[rightI];
        arr[rightI] = tem;
        pivot = rightI;
        leftI++;
        while (arr[pivot]>=arr[leftI] && leftI!=rightI)
        {
            leftI++;
        }

        if (leftI == rightI)
            return pivot;
         tem = arr[pivot];
        arr[pivot] = arr[leftI];
        arr[leftI] = tem;
        pivot = leftI;
        rightI--;
    };
    return start;
}

void Quick(int arr[],int start,int end){
    if(start<end){
        int mid = QuickSort(arr,start,end);
        Quick(arr,start,mid-1);
        Quick(arr,mid+1,end);
    }
}


int main()
{
    int arr[] = {4, 3, 44, 23, 12, 64, 2};
    Quick(arr, 0,sizeof(arr) / sizeof(arr[0])-1);

    for (int i = 0; i < 7; i++)
        cout << arr[i] << " ";
    return 0;
}