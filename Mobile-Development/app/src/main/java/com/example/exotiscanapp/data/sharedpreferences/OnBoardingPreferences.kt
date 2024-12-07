package com.example.exotiscanapp.data.sharedpreferences

import android.content.Context

class OnBoardingPreferences(private val context: Context) {

    private val sharedPref = context.getSharedPreferences("onBoarding", Context.MODE_PRIVATE)

    // Fungsi untuk menyimpan status onboarding
    fun setOnBoardingFinished(isFinished: Boolean) {
        val editor = sharedPref.edit()
        editor.putBoolean("finished", isFinished)
        editor.apply()
    }

    // Fungsi untuk memeriksa apakah onboarding sudah selesai
    fun isOnBoardingFinished(b: Boolean): Boolean {
        return sharedPref.getBoolean("finished", false)
    }
}
